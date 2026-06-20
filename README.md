# JSON Schema Validator MCP Server

An authoritative, edge-native Model Context Protocol (MCP) server that empowers AI agents to validate complex JSON payloads deterministically, bypassing the high token costs and hallucination risks of relying on Large Language Models (LLMs) for schema evaluation. 

Developed and maintained by the Vinkius engineering team, this tool bridges the gap between probabilistic AI generation and strict, mathematical data compliance.

[![Deploy on Vinkius Cloud](https://img.shields.io/badge/Deploy%20on-Vinkius%20Cloud-blue?style=for-the-badge)](https://vinkius.com/mcp/json-schema-validator)
[![MCP Fusion Compatible](https://img.shields.io/badge/MCP%20Fusion-Strict%20Mode-success?style=for-the-badge)](https://www.npmjs.com/package/@mcpfusion/core)

## Why AI Fails at Schema Validation (And How We Solve It)

In our experience building autonomous agents, we discovered a recurring architectural flaw: **LLMs are probabilistic text engines, not deterministic parsers.** 

When an agent is asked to validate a massive JSON document against a deeply nested OpenAPI specification or JSON Schema, two major failures occur:
1. **Context Exhaustion**: Feeding a 5,000-line JSON payload and its corresponding schema into the context window drains token limits rapidly and dramatically increases inference costs.
2. **Constraint Hallucination**: AI models notoriously struggle with strict logical boundaries. They frequently ignore or misinterpret subtle constraints like `maxLength`, regex `pattern` requirements, or conditionally `required` fields.

### The Deterministic Approach
We built the **JSON Schema Validator MCP** to solve this. Instead of prompting an LLM to guess if a payload is valid, the agent delegates the validation to this server. Under the hood, we use [Ajv](https://ajv.js.org/), an industry-standard, high-performance JSON Schema validator. The server strictly evaluates the data in milliseconds and returns the exact failure path, allowing the LLM to self-correct without burning thousands of tokens.

---

## Tool Capabilities

This MCP exposes a highly optimized tool specifically designed for agentic workflows:

* `validate_json_schema`
  * **Function**: Accepts a JSON string and an optional JSON Schema string. Evaluates the structure with absolute precision.
  * **Output**: Returns a boolean validation status. If the JSON is invalid, it returns the exact schema violation path (e.g., `data.user.email must match format "email"`), giving the LLM precise instructions on how to fix its output.

---

## Instant Access via Vinkius Cloud

If you need to equip your AI agents with strict JSON validation capabilities immediately, you don't need to configure infrastructure. We host a highly available, globally distributed instance of this server on **Vinkius Cloud**.

👉 **[Connect the JSON Schema Validator to your AI via Vinkius](https://vinkius.com/mcp/json-schema-validator)**

Vinkius Cloud is an enterprise-grade MCP execution environment. Servers run in V8 isolate sandboxes at the edge, guaranteeing sub-40ms cold starts, native DLP (Data Loss Prevention) redaction, and maximum security for your agentic data workflows.

---

## Local Development & Deployment

This project is fully open-source and built on top of [MCP Fusion](https://www.npmjs.com/package/@mcpfusion/core), our framework for developing highly secure, typesafe MCP servers.

### Prerequisites
- Node.js 20 or higher
- An MCP-compatible client (such as Claude Desktop or a custom LangChain/Vinkius agent)

### Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```
   *This starts the server locally on stdio, ready to be attached to your MCP client.*

3. **Deploying to Edge Production**
   If you wish to deploy your own instance to the Vinkius Edge infrastructure, authenticate via the CLI and run:
   ```bash
   npm run deploy
   ```
   *Under the hood, this utilizes `mcpfusion deploy` to compile, package, and distribute your server to edge nodes globally.*

## Security & Trust

Data privacy is paramount when dealing with AI pipelines. This server strictly processes data in memory and discards it immediately after validation. By leveraging the `@mcpfusion/core` architecture, the egress layer acts as a typed firewall, ensuring that no sensitive environmental data or unauthorized filesystem access can ever leak back to the LLM.
