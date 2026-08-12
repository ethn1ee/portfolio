FROM oven/bun:1.3-slim AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN --mount=type=cache,id=bun,target=/root/.bun/install/cache bun install --frozen-lockfile

COPY . .
RUN bun --bun run build

FROM oven/bun:1.3-slim
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build --chown=bun:bun /app/build ./build
COPY --from=build --chown=bun:bun /app/package.json ./

USER bun
EXPOSE 3000
CMD ["bun", "./build/index.js"]
