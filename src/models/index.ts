import { defineModel } from '@mcpfusion/core';

export const ValidationResponseModel = defineModel('ValidationResponse', (m) => {
    m.casts({
        success: m.boolean('Success flag'),
        isValid: m.boolean('Is JSON valid'),
        errors: m.string('Errors or success message')
    });
});
