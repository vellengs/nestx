"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getJSDocDescription(node) {
    const jsDocs = node.jsDoc;
    if (!jsDocs || !jsDocs.length) {
        return '';
    }
    return jsDocs[0].comment || '';
}
exports.getJSDocDescription = getJSDocDescription;
function getJSDocTag(node, tagName) {
    const tags = getJSDocTags(node, tagName);
    if (!tags || !tags.length) {
        return;
    }
    return tags[0].comment;
}
exports.getJSDocTag = getJSDocTag;
function isExistJSDocTag(node, tagName) {
    const tags = getJSDocTags(node, tagName);
    if (!tags || !tags.length) {
        return false;
    }
    return true;
}
exports.isExistJSDocTag = isExistJSDocTag;
function getJSDocTags(node, tagName) {
    return getMatchingJSDocTags(node, t => t.tagName.text === tagName);
}
function getFirstMatchingJSDocTagName(node, isMatching) {
    const tags = getMatchingJSDocTags(node, isMatching);
    if (!tags || !tags.length) {
        return;
    }
    return tags[0].tagName.text;
}
exports.getFirstMatchingJSDocTagName = getFirstMatchingJSDocTagName;
function getMatchingJSDocTags(node, isMatching) {
    const jsDocs = node.jsDoc;
    if (!jsDocs || !jsDocs.length) {
        return;
    }
    const jsDoc = jsDocs[0];
    if (!jsDoc.tags) {
        return;
    }
    return jsDoc.tags.filter(isMatching);
}
