# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps ./apps

RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:18-alpine AS builder
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /app

ARG SITE_ID
ENV SITE_ID=${SITE_ID}
ENV NEXT_PUBLIC_SITE_ID=${SITE_ID}

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build --filter=@platform/app

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/platform/public ./public
COPY --from=builder /app/configs ./configs

COPY --from=builder --chown=nextjs:nodejs /app/apps/platform/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/platform/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
