/**
 * rest api interface
 * 项目标准接口
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 */
export interface EditPageReq { 
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    title: string;
    /**
     * 
     */
    description: string;
    /**
     * 
     */
    sort: number;
    /**
     * 
     */
    disable: boolean;
    /**
     * 
     */
    meta: string;
    /**
     * 
     */
    publish: string;
    /**
     * 
     */
    content: string;
    /**
     * 
     */
    template: string;
}