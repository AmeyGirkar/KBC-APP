# Stage 1: Clone repository
FROM alpine:latest AS builder
RUN apk add --no-cache git
WORKDIR /app
RUN git clone https://github.com/AmeyGirkar/KBC-APP.git .

# Stage 2: Use nginx to serve the files
FROM nginx:alpine
COPY --from=builder /app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
