# n8n-nodes-html-to-text

This is an n8n community node. It lets you use n8n-nodes-html-to-text in your n8n workflows.

n8n-nodes-html-to-text is a tool to convert HTML content to plain text, normally used for AI clean up.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Convert HTML to Text: Converts any HTML input into plain text format.

## Compatibility

Tested against n8n version 1.0.0+.

## Usage

This node takes an input string containing HTML and outputs a clean plain text version.

Example of input data:

```
<p>The HTML editor allows users to create HTML templates in their workflows. The editor supports standard HTML, CSS in <code>&lt;style&gt;</code> tags, and expressions wrapped in <code>{{}}</code>. Users can add <code>&lt;script&gt;</code> tags to pull in additional JavaScript. n8n doesn't run this JavaScript during workflow execution.</p>
```

Example of response data:

```
{
  text: "The HTML editor allows users to create HTML templates in their workflows. The editor supports standard HTML, CSS in <style> tags, and expressions wrapped in {{}}. Users can add <script> tags to pull in additional JavaScript. n8n doesn't run this JavaScript during workflow execution."
}
```

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [html-to-text documentation](https://www.npmjs.com/package/html-to-text)