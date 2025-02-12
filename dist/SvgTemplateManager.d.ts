/** A framework for templatable SVG images. */
export declare class SvgTemplateManager {
    /************************
     * Public functions
     ***********************/
    /**
     * Adds an image template to the SvgTemplateManager.
     * @param templateName The name of the template.
     * @param template The SVG template to add. Supports `{color}`, `{secondaryColor}`, `{scale}`, and `{text}`
     * @param override Specifies if it should override existing templates if one with the same name already exists.
     */
    static addTemplate(templateName: string, template: string, override: boolean): void;
    /**
     * Inflates a template and converts it into an HTMLElement.
     * @param templateName The name of the template to inflate.
     * @param text Text to display in the template.
     * @param color Primary color.
     * @param secondaryColor Secondary colors.
     * @param scale Scale of the template.
     * @returns
     */
    static getElement(templateName: string, text?: string, color?: string, secondaryColor?: string, scale?: number): HTMLElement;
    /**
     * Retrieves an SVG template by name.
     * @param templateName The name of the template to retrieve.
     * @param scale Optional. A value indicating how much to scale the image.
     */
    static getTemplate(templateName: string, scale?: number): string;
    /**
     * Gets the name of all image templates loaded into the SvgTemplateManager
     */
    static getAllTemplateNames(): string[];
    /**
     * A list of built in image templates.
     */
    private static readonly _imageTemplates;
    /**
     * Fills in the placeholder values of a template with the given values
     * @param templateName Name of the template to use.
     * @param text Text to display in the template.
     * @param color Primary color.
     * @param secondaryColor Secondary colors.
     * @param scale Scale of the template.
     * @returns HTML string of the filled template.
     */
    static _applyStyle(templateName: string, text?: string, color?: string, secondaryColor?: string, scale?: number): string;
}
