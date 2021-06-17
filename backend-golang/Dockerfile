FROM golang:1.16.5-alpine3.13 AS build

WORKDIR /opt/amber-backend
COPY ./* /opt/amber-backend/
RUN go mod tidy
RUN CGO_ENABLED=0 \
    go build \
    -o main \
    .

FROM scratch
COPY --from=build /opt/amber-backend/main /bin/amber-backend
ENTRYPOINT ["/bin/amer-backend"]
