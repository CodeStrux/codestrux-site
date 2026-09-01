# Build a static musl exc binary, then graft it + a demo config onto the
# official vhs image. Build needs network; capture runs with --network none.

FROM rust:1.95.0-alpine3.22 AS build
RUN apk add --no-cache musl-dev gcc
# The musl target links crt statically by default, so the binary runs on the
# (glibc, Debian) vhs image as-is. Do NOT set a global +crt-static RUSTFLAGS:
# it also applies to proc-macro dylibs (clap_derive) and breaks the build.
RUN cargo install exc-launcher --version 0.6.0 --locked

FROM ghcr.io/charmbracelet/vhs:v0.11.0
# openssl: secrets-profile demo commands; procps: ps for top-processes
RUN apt-get update \
 && apt-get install -y --no-install-recommends openssl procps \
 && rm -rf /var/lib/apt/lists/*
COPY --from=build /usr/local/cargo/bin/exc /usr/local/bin/exc
COPY exc-config.toml /root/.config/exc/config.toml
# ENTRYPOINT (/usr/bin/vhs) and WORKDIR (/vhs) inherited from the vhs image.
