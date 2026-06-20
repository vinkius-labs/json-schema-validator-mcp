import { f } from '../../mcpfusion.js';
import { ValidationResponsePresenter } from '../../views/index.js';
import { validateJson } from '../../engine/logic.js';

export const validateJsonTool = f.action('validate_json_schema')
    .describe('Validates a JSON string optionally against a JSON Schema.')
    .instructions('Use this tool to validate a JSON payload against a JSON Schema. Pass both as JSON strings. The engine returns whether the data is valid and lists all specific validation errors found.')
    .withString('jsonStr', 'The JSON string to validate.')
    .withOptionalString('schemaStr', 'The JSON Schema string to validate against.')
    .returns(ValidationResponsePresenter)
    .handle(async (i) => await validateJson(i.jsonStr, i.schemaStr));
