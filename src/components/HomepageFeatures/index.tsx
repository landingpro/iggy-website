import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Extremely Efficient',
    Svg: require('@site/static/img/ExtremelyEfficient.svg').default,
    description: (
      <>
        Rust language guarantees the predictable resources' usage, thus, you no longer need to worry about a random GC spikes.
      </>
    ),
  },
  {
    title: 'Multiple Transports',
    Svg: require('@site/static/img/MultipleTransports.svg').default,
    description: (
      <>
        TCP, QUIC, HTTP, or maybe all of them at once? Easily configure and enable the different transport protocols.
      </>
    ),
  },
  {
    title: 'Advanced Features',
    Svg: require('@site/static/img/AdvancedFeatures.svg').default,
    description: (
      <>
        Users, partitioning, consumer groups, message deduplication, retention policy, data encryption and many more.
      </>
    ),
  },
  {
    title: 'SDK Support',
    Svg: require('@site/static/img/Sdk.svg').default,
    description: (
      <>
        Building the distributed systems might involve many programming languages, which is why, we provide different SDKs.
      </>
    ),
  },
  {
    title: 'Management Interface',
    Svg: require('@site/static/img/ManagementInterface.svg').default,
    description: (
      <>
        Built-in terminal CLI to manage the streaming server, or maybe the modern Web UI? Why not both :)
      </>
    ),
  },
  {
    title: 'Fully Open-Source',
    Svg: require('@site/static/img/FullyOpenSourced.svg').default,
    description: (
      <>
        Thanks to the power of community, we can constantly improve Iggy and support multiple programming languages SDKs.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
