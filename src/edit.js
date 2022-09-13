/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { SelectControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

const Edit = (props) => {
	const {
		attributes: { content, color = "primary" },
		setAttributes,
	} = props;

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	const onChangeColor = (newColor) => {
		setAttributes({ color: newColor });
	};

	return (
		<div {...useBlockProps()}>
			<div className={"alert alert-" + color} role="alert">
				<RichText
					tagName="div"
					onChange={onChangeContent}
					value={content}
					placeholder="Votre alerte..."
					className="alertContent"
				/>
			</div>
			<SelectControl
				label="Couleur"
				value={color}
				options={[
					{ label: "Primary", value: "primary" },
					{ label: "Secondary", value: "secondary" },
					{ label: "Success", value: "success" },
					{ label: "Danger", value: "danger" },
					{ label: "Warning", value: "warning" },
					{ label: "Info", value: "info" },
					{ label: "Light", value: "light" },
					{ label: "Dark", value: "dark" },
				]}
				onChange={(newColor) => onChangeColor(newColor)}
			/>
		</div>
	);
};
export default Edit;
