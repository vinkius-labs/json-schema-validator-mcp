import _Ajv from 'ajv';

export async function validateJson(jsonStr: string, schemaStr?: string) {
    try {
        const data = JSON.parse(jsonStr);
        if (!schemaStr) {
            return { success: true, isValid: true, errors: 'Valid JSON format.' };
        }
        
        const schema = JSON.parse(schemaStr);
        const Ajv = (_Ajv as any).default || _Ajv;
        const ajv = new Ajv({ allErrors: true });
        const validate = ajv.compile(schema);
        const valid = validate(data);
        
        if (valid) {
            return { success: true, isValid: true, errors: 'JSON perfectly matches the schema.' };
        } else {
            return { success: true, isValid: false, errors: ajv.errorsText(validate.errors) };
        }
    } catch (e: any) {
        return { success: false, isValid: false, errors: e.message };
    }
}
