# n8n-nodes-html-to-text

This is an n8n community node. It lets you use n8n-nodes-html-to-text in your n8n workflows.

n8n-nodes-html-to-text is a tool HTML content to plain text, normally used for AI buidling

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


## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.