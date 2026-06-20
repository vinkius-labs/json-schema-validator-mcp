# JSON Schema Validator MCP Server

This repository is a **showcase** demonstrating how to build a robust, edge-native MCP server using the [@mcpfusion/core](https://github.com/vinkius-labs/mcpfusion) framework and deploy it effortlessly on [Vinkius Cloud](https://vinkius.com).

## The Problem It Solves

LLMs are probabilistic engines, not mathematical evaluators. Asking an LLM to validate a large JSON payload against a deeply nested OpenAPI or JSON Schema forces it to consume massive amounts of tokens and often leads to "hallucinations" (missing subtle constraints like `maxLength`, `pattern`, or nested `required` fields).

This MCP server offloads that task to a deterministic engine (`Ajv`). It validates JSON strictly and returns the exact path and failure reason, saving tokens and ensuring zero-hallucination validation.

🚀 **Ready to use?** If you just want to add this tool to your AI agent immediately, you can use the hosted version here:  
👉 **[vinkius.com/mcp/json-schema-validator](https://vinkius.com/mcp/json-schema-validator)**

## Available Tools

* **`validate_json_schema`**
  * Validates a JSON string optionally against a JSON Schema.
  * Inputs: `jsonStr` (The JSON payload to validate) and `schemaStr` (The JSON Schema to validate against).
  * Returns whether the JSON is valid and specifically points out any constraint violations.

## About Vinkius Cloud

[Vinkius Cloud](https://vinkius.com) is the premier platform for deploying MCP (Model Context Protocol) servers. It provides an enterprise-grade execution environment designed for performance, security, and developer experience.

- **Edge-Native Architecture**: Your MCP servers run inside V8 isolate sandboxes globally, delivering sub-40ms cold starts.
- **Secure by Default**: Built-in DLP (Data Loss Prevention) redaction, Ed25519 signed audit chains, and an instant kill switch.
- **Zero Friction Deployment**: No complex DevOps required. You can deploy your MCP tools to production in seconds.

## Deployment

To deploy this MCP Server to Vinkius Edge infrastructure, run:

```bash
npm run deploy
```
*(This executes `mcpfusion deploy` under the hood)*

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## About MCP Fusion

[MCP Fusion](https://github.com/vinkius-labs/mcpfusion) is the TypeScript framework for secure MCP servers. It enforces security at the architectural level, ensuring raw data never reaches an LLM without passing through a typed egress firewall.
