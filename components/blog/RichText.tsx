import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichText = (props) => {
    const richText = documentToReactComponents(props);
    return <p>{richText}</p>;
};

export default RichText;
