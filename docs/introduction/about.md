---
id: introduction-about
slug: /introduction/about
title: About
sidebar_position: 1
---

**Iggy** is the persistent message streaming platform written in Rust, supporting [QUIC](https://www.chromium.org/quic/), TCP (custom binary specification) and HTTP (regular REST API) transport protocols, **capable of processing millions of messages per second at the low latency**.

Iggy provides **exceptionally high throughput and performance** while utilizing minimal computing resources.

This is **not yet another extension** running on top of the existing infrastructure, such as Kafka or SQL database.

Iggy is the persistent message streaming log **built from the ground up** using the low lvl I/O for speed and efficiency.

The name is an abbreviation for the Italian Greyhound - small yet extremely fast dogs, the best in their class. See the lovely [Fabio & Cookie](https://www.instagram.com/fabio.and.cookie/) ❤️

![Iggy Server](/img/iggy_server.png)

---

### Features

- **Highly performant**, persistent append-only log for the message streaming
- **Very high throughput** for both writes and reads
- **Low latency and predictable resource usage** thanks to the Rust compiled language (no GC)
- **Users authentication and authorization** with granular permissions and PAT (Personal Access Tokens)
- Support for multiple streams, topics and partitions
- Support for **multiple transport protocols** (QUIC, TCP, HTTP)
- Fully operational RESTful API which can be optionally enabled
- Available client SDK in multiple languages
- **Works directly with the binary data** (lack of enforced schema and serialization/deserialization)
- Custom **Zero-copy (de)serialization**, which greatly improves the performance and reduces memory usage.
- Configurable server features (e.g. caching, segment size, data flush interval, transport protocols etc.)
- Possibility of storing the **consumer offsets** on the server
- Multiple ways of polling the messages:
  - By offset (using the indexes)
  - By timestamp (using the time indexes)
  - First/Last N messages
  - Next N messages for the specific consumer
- Possibility of **auto committing the offset** (e.g. to achieve *at-most-once* delivery)
- **Consumer groups** providing the message ordering and horizontal scaling across the connected clients
- **Message expiry** with auto deletion based on the configurable **retention policy**
- Additional features such as **server side message deduplication**
- **Multi-tenant** support via abstraction of **streams** whch group **topics**
- **TLS** support for all transport protocols (TCP, QUIC, HTTPS)
- Optional server-side as well as client-side **data encryption** using AES-256-GCM
- Optional metadata support in the form of **message headers**
- Optional **data backups & archivization** on disk and/or the **S3** compatible cloud storage (e.g. AWS S3)
- Support for **[OpenTelemetry](https://opentelemetry.io/)** logs & traces + Prometheus metrics
- Built-in **CLI** to manage the streaming server installable via `cargo install iggy-cli`
- Built-in **benchmarking app** to test the performance
- **Single binary deployment** (no external dependencies)
- Running as a single node (clustering based on Viewstamped Replication will be implemented in the near future)

### Supported languages SDK

- [Rust](https://crates.io/crates/iggy)
- [C#](https://github.com/iggy-rs/iggy-dotnet-client)
- [Go](https://github.com/iggy-rs/iggy-go-client)
- [Node](https://github.com/iggy-rs/iggy-node-client)
- [Python](https://github.com/iggy-rs/iggy-python-client)
- [Java](https://github.com/iggy-rs/iggy-java-client)

### CLI

The brand new, rich, interactive CLI is implemented under the `cli` project, to provide the best developer experience. This is a great addition to the Web UI, especially for all the developers who prefer using the console tools.

### Web UI

There's an ongoing effort to build the administrative web UI for the server, which will allow to manage the streams, topics, partitions, messages and so on. Check the [Web UI repository](https://github.com/iggy-rs/iggy-web-ui)

### Docker

The official images can be found [here](https://hub.docker.com/r/apache/iggy), simply type `docker pull apache/iggy` to pull the image.

Please note that the images tagged as `latest` are based on the official, stable releases, while the `edge` ones are updated directly from latest version of the `master` branch.

You can find the `Dockerfile` and `docker-compose` in the root of the repository. To build and start the server, run: `docker compose up`.

Additionally, you can run the `CLI` which is available in the running container, by executing: `docker exec -it iggy-server /iggy`.

Keep in mind that running the container on the OS other than Linux, where the Docker is running in the VM, might result in the performance degradation.
