import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    href: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Master Thesis',
        href: '/general',
        Svg: require('@site/static/img/undraw_professor_re_mj1s.svg').default,
        description: (
            <>
                Find all the documentation that is relevant in terms of our master thesis - such as milestones and
                decisions.
            </>
        ),
    },
    {
        title: 'Technical Documentation',
        href: '/docs',
        Svg: require('@site/static/img/undraw_code_inspection_bdl7.svg').default,
        description: (
            <>
                Find all the technical documentation such as domain or infrastructure concepts. This gets you up and
                running in no time.
            </>
        ),
    },
    {
        title: 'Meeting Notes',
        href: '/meeting-notes',
        Svg: require('@site/static/img/undraw_meeting_re_i53h.svg').default,
        description: (
            <>
                We are all about transparency - so you can read about all the meetings we've had in this place. You can
                also browse them by <a href={"/meeting-notes/tags"} title={"tags"}>tags</a> or skim through the <a
                href={"/meeting-notes/archive"} title={"archive"}>archive</a>
            </>
        ),
    },
];

function Feature({title, Svg, description, href}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <a href={href} title={title}>
                    <h3>{title}</h3>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
