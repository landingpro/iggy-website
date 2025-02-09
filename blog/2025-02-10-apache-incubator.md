---
title: Iggy joins the Apache Incubator
authors:
  - name: Piotr Gankiewicz
    title: Iggy.rs founder
    url: https://github.com/spetz
    image_url: https://github.com/spetz.png
tags: []
hide_table_of_contents: false
date: 2025-02-10
---
## Apache Incubation

We're extremely excited to announce that Iggy has been accepted into the [Apache Incubator](https://incubator.apache.org) program! Since the very first day, **Iggy was always meant to be a truly FOSS project**, and we're thrilled to see it being recognized by the Apache Software Foundation (ASF). This is a huge milestone for us, and we're looking forward to the journey ahead.

Here you can find the [official proposal](https://cwiki.apache.org/confluence/display/INCUBATOR/Iggy+Proposal), along with the [discussion](https://lists.apache.org/thread/q9whr3q9qd6wqm89f0vc1f6vkkvzc8xf) and the [voting results](https://lists.apache.org/thread/6zfgdjwrzs92h4z4x6b25v1r23g3f5yg).

It's been almost 2 years now since the very first line of code was written, and we've come a long way since the initial release. We've managed to build an amazing community around Iggy, and we're grateful for all the contributions and feedback we've received. We're confident that this move will help us grow even further and make Iggy even better.

What's also worth mentioning is that it's not just about the core Iggy repository anymore, but also about the [ecosystem](https://github.com/iggy-rs/) around it such as SDKs, CLIs, Web UIs, and more - we're already close to 20 repositories in total, and we want to ensure that all of them are following the ASF guidelines.

We'll do our best to make Iggy the TLP (Top-Level Project) in the future, as we already have a lot of ideas on how to improve the project and the community around it.

**The future of message streaming is with Iggy, and we want to make sure that everyone can benefit from it as Free and Open Source Software, that will stay this way forever.**

## Codebase transition

After the recent [discussion](https://lists.apache.org/thread/zrn96nlg23r9353lr5tp2by2ggx4zxqc), we plan to stick to the **monorepo approach**, under which, we will have a single repository for all the Iggy-related projects. This will make it easier for the contributors to navigate through the codebase, and to see how the changes in one project affect the others. This should also help us to keep the consistency across the projects, especially, once we release the Rust bindings to be used within the other languages SDKs.

All the repositories under [iggy-rs](https://github.com/iggy-rs) will be eventually moved to the [apache/iggy](https://github.com/apache/iggy) repository, and we will make sure that all the existing links and references are updated accordingly.

We'll also host our website under the [iggy.apache.org](https://iggy.apache.org) domain, including the documentation, blog, and the upcoming benchmarks. We've also updated our social media handles to contain the Apache prefix.

There will be most likely some changes related to hosting the Docker images, as well as the other tools we're using, but we'll make sure to keep you updated on that.

**Last but not least, we've got a new logo**! Our lovely Italian Greyhound is now a part of the Apache family, and we're proud to have it as our mascot. As you can see, it's so fast, that even the light travelling through the optical can't keep up with it :)

![image](/apache-incubator/iggy_logo.png)
