/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

const Save = (props) => {
	const {
		attributes: { content, color },
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<div
			{...blockProps}
			className={"alert alert-dismissible alert-" + color}
			role="alert"
		>
			<RichText.Content
				tagName="div"
				value={content}
				className="alertContent"
			/>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
	);
};

export default Save;
