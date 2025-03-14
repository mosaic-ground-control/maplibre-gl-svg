import type { Map } from "maplibre-gl";
/**
 * A class that manages the lifecycle of SVG's for a map instance.
 */
export declare class SvgManager {
    /************************
     * Private properties
     ***********************/
    private readonly _map;
    private _images;
    /************************
     * Constructor
     ***********************/
    /**
     * A class that manages the lifecycle of SVG's for a map instance.
     * @param map A maplibre-gl-js map instance.
     */
    constructor(map: Map);
    /************************
     * Public functions
     ***********************/
    /**
     * Adds an SVG image to the maps image sprite.
     * @param id A unique ID to reference the image by. Use this to render this image in your layers. If the specified id matches the ID of a previously added image the new image will be ignored.
     * @param svg An inline SVG string, or URL to an SVG image.
     * @param maxWidth The maximum width to allow the image to be. If the image exceeds this width it will be scaled down to fit. Default: 100
     * @param maxHeight The maximum height to allow the image to be. If the image exceeds this height it will be scaled down to fit. Default: 100
     */
    add(id: string, svg: string, maxWidth?: number, maxHeight?: number, asSDF?: boolean): Promise<void>;
    /**
     * Removes all SVG images loaded into the maps sprite.
     */
    clear(): void;
    /**
     * Gets a list of all the image ids that have been added to the maps image sprite.
     */
    getImageIds(): string[];
    /**
     * Checks to see if an image is already loaded into the maps image sprite.
     * @param id The id to check the map's image sprite for.
     */
    hasImage(id: string): boolean;
    /**
     * Creates and adds an image to the maps image sprite from an SVG template.
     * Provide the name of the built-in or pre-loaded template to use, and a color to apply.
     * Optionally, specify a secondary color if the template supports one.
     * A scale can also be specified.
     * This will allow the SVG to be scaled before being converted into an image and thus look much better when scaled up.
     * Returns a promise.
     * @param id A unique ID to reference the image by. Use this to render this image in your layers.
     * @param templateName The name of an SVG template to generate the image from.
     * @param color The primary color to apply to the template. Default `#1A73AA`
     * @param secondaryColor The secondary color value to apply to the template. Default: `white`
     * @param scale Specifies how much to scale the template. For best results, scale the icon to the maximum size you want to display it on the map, then use the symbol layers icon size option to scale down if needed. This will reduce blurriness due to scaling. Default: 1
     * @param text Text to display in the template. Rarely used with symbols since symbol layers have its own text support.
     */
    createFromTemplate(id: string, templateName: string, color?: string, secondaryColor?: string, scale?: number, text?: string): Promise<void>;
    /**
     * Removes an SVG image from the maps image sprite.
     * @param id The ID of the image to remove from the maps image sprite.
     */
    remove(id: string): void;
    /**
     * It's possible that the map's image sprite may be cleared by the user outside of this manager.
     * Calling this method will reload all images in this manager.
     */
    reload(): void;
}
