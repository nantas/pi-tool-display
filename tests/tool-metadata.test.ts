import assert from "node:assert/strict";
import test from "node:test";
import { isMcpToolCandidate } from "../src/tool-metadata.ts";

test("isMcpToolCandidate returns true for MCP proxy tool", () => {
	assert.strictEqual(isMcpToolCandidate({ name: "mcp" }), true);
});

test("isMcpToolCandidate returns true for direct tool with MCP: label", () => {
	assert.strictEqual(
		isMcpToolCandidate({ name: "x_list", label: "MCP: list" }),
		true,
	);
});

test("isMcpToolCandidate returns true for direct tool with MCP label (space)", () => {
	assert.strictEqual(
		isMcpToolCandidate({ name: "x_list", label: "MCP list" }),
		true,
	);
});

test("isMcpToolCandidate returns false for normal tool", () => {
	assert.strictEqual(isMcpToolCandidate({ name: "grep" }), false);
});

test("isMcpToolCandidate returns true for tool with MCP description (regression)", () => {
	assert.strictEqual(
		isMcpToolCandidate({ name: "foo", description: "MCP gateway" }),
		true,
	);
});

test("isMcpToolCandidate returns false for null", () => {
	assert.strictEqual(isMcpToolCandidate(null), false);
});

test("isMcpToolCandidate returns false for undefined", () => {
	assert.strictEqual(isMcpToolCandidate(undefined), false);
});

test("isMcpToolCandidate returns false for empty object", () => {
	assert.strictEqual(isMcpToolCandidate({}), false);
});
