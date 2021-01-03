import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

interface Props {
    node?: any;
    children: ReactNode;
}

const Bold: React.FC<Props> = ({ children }) => (
    <span className="bold">{children}</span>
);

const Code: React.FC<Props> = ({ children }) => (
    <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
        {children}
    </pre>
);

const Text: React.FC<Props> = ({ children }) => (
    <p className="align-center">{children}</p>
);

const Heading1: React.FC<Props> = ({ children }) => (
    <h1 className="inline-block text-4xl my-4 ">{children}</h1>
);

const Heading2: React.FC<Props> = ({ children }) => (
    <h2 className="inline-block text-3xl my-2 ">{children}</h2>
);

const Heading3: React.FC<Props> = ({ children }) => (
    <h3 className="inline-block text-2xl my-2 ">{children}</h3>
);

const Heading4: React.FC<Props> = ({ children }) => (
    <h4 className="inline-block text-xl my-2">{children}</h4>
);

const Heading5: React.FC<Props> = ({ children }) => (
    <h5 className="inline-block text-xl my-2">{children}</h5>
);

const Heading6: React.FC<Props> = ({ children }) => (
    <h6 className="inline-block text-xl my-2 border-b border-blue-600">
        {children}
    </h6>
);

const Ul: React.FC<Props> = ({ children }) => (
    <ul className="list-disc ml-5">{children}</ul>
);

const HyperLink: React.FC<Props> = ({ node, children }) => (
    <a
        className="text-blue-600"
        href={`${node?.data.uri}`}
        target="_blank"
        rel="noreferrer noopener"
    >
        {children}
    </a>
);

const Quote: React.FC<Props> = ({ children }) => (
    <blockquote className="border-l-4 border-blue-600 italic  my-4 pl-4 md:pl-12">
        {children}
    </blockquote>
);

const options = {
    renderMark: {
        [MARKS.BOLD]: function bold(text: ReactNode) {
            return <Bold>{text}</Bold>;
        },
        [MARKS.CODE]: function code(text: ReactNode) {
            return <Code>{text}</Code>;
        },
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: function paragraph(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Text>{children}</Text>;
        },
        [BLOCKS.HEADING_1]: function heading1(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Heading1>{children}</Heading1>;
        },
        [BLOCKS.HEADING_2]: function heading2(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Heading2>{children}</Heading2>;
        },
        [BLOCKS.HEADING_3]: function heading3(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Heading3>{children}</Heading3>;
        },
        [BLOCKS.HEADING_4]: function heading4(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Heading4>{children}</Heading4>;
        },
        [BLOCKS.HEADING_5]: function heading5(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Heading5>{children}</Heading5>;
        },
        [BLOCKS.HEADING_6]: function heading6(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Heading6>{children}</Heading6>;
        },
        [BLOCKS.UL_LIST]: function heading6(
            node: ReactNode,
            children: ReactNode
        ) {
            return <Ul>{children}</Ul>;
        },
        [BLOCKS.QUOTE]: function quote(node: ReactNode, children: ReactNode) {
            return <Quote>{children}</Quote>;
        },
        [INLINES.HYPERLINK]: function hyperlink(
            node: any,
            children: ReactNode
        ) {
            return <HyperLink node={node}>{children}</HyperLink>;
        },
    },
};

const RichText: React.FC<any> = (props) => {
    console.log(props);
    const richText = documentToReactComponents(props, options);
    return <div className="text-gray-700 leading-relaxed">{richText}</div>;
};

export default RichText;
