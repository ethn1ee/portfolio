FROM oven/bun:1-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json bun.lock ./
RUN bun install

COPY . .
RUN bun run build

FROM oven/bun:1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

COPY --from=builder --chown=bun:bun /app/public ./public
COPY --from=builder --chown=bun:bun /app/.next/standalone ./
COPY --from=builder --chown=bun:bun /app/.next/static ./.next/static

EXPOSE 3000

USER bun

CMD ["bun", "server.js"]
