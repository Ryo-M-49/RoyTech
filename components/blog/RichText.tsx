import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

// interface Node {
//     content: {
//         data: Record<string, string>;
//         nodeType: string;
//         value: string;
//         marks: Record<string, string>[];
//     }[];
//     data: Record<string, string>;
//     nodeType: string;
// }

// ReactNodeを指定するとエラーになるのでいったんany
interface Props {
    node?: any;
    children: ReactNode;
}

const Bold: React.FC<Props> = ({ children }) => (
    <span className="bold">{children}</span>
);

const Text: React.FC<Props> = ({ children }) => (
    <p className="align-center">{children}</p>
);

const Heading1: React.FC<Props> = ({ children }) => (
    <h1 className="text-2xl my-2">{children}</h1>
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

const options = {
    renderMark: {
        [MARKS.BOLD]: function bold(text: ReactNode) {
            return <Bold>{text}</Bold>;
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
        [INLINES.HYPERLINK]: function hyperlink(
            node: any,
            children: ReactNode
        ) {
            return <HyperLink node={node}>{children}</HyperLink>;
        },
    },
};

//型の指定するとエラーなるのでいったんanyで…
const RichText: React.FC<any> = (props) => {
    console.log(props);
    const richText = documentToReactComponents(props, options);
    return <p>{richText}</p>;
};

export default RichText;
