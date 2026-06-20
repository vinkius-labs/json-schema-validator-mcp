import { createPresenter, ui } from '@mcpfusion/core';
import { ValidationResponseModel } from '../models/index.js';

export const ValidationResponsePresenter = createPresenter('ValidationResponse')
  .schema(ValidationResponseModel as any)
  .rules(['Display the validation result.'])
  .ui((data: any) => {
      if (!data.success) return [ui.markdown(`❌ **JSON Parse Error:** ${data.errors}` as string)];
      if (data.isValid) return [ui.markdown(`✅ **JSON is VALID!** ${data.errors}` as string)];
      return [ui.markdown(`⚠️ **JSON Schema Mismatch:**\n${data.errors}` as string)];
  });
