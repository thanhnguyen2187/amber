FROM golang:1.16.5-alpine3.13 AS build

WORKDIR /opt/amber-backend
COPY go.mod /opt/amber-backend/go.mod
COPY go.sum /opt/amber-backend/go.sum
RUN go mod tidy

COPY . /opt/amber-backend/
RUN CGO_ENABLED=0 \
    go build \
    -o main \
    .

FROM scratch
COPY .prod.env /.env
COPY --from=build /opt/amber-backend/main /bin/amber-backend
ENTRYPOINT ["/bin/amber-backend"]
