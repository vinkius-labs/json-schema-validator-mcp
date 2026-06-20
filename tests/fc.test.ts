import { describe, it, expect } from 'vitest';
import * as tools from '../src/agents/api/api.tool.js';

describe('AmazonS3Bucket-mcp Engine', () => {
  it('should export exactly 7 tools', () => {
    expect(Object.keys(tools).length).toBe(7);
  });
});
