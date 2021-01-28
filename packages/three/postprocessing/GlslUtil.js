
/**
 * refrence  webpack @herr/harp-utils
 * @param {Object} vertexShader
 */
function convertVertexShaderToWebGL2(vertexShader) {
    return (["#version 300 es",
    "#define attribute in",
    "#define varying out", 
    "#define texture2D texture",
    "in vec3 position;",
	"in vec2 uv;",
	"uniform mat4 modelViewMatrix;",
	"uniform mat4 projectionMatrix;"
    ].join("\n") +
        "\n" +
        vertexShader);
}
/**
 * Converts webgl1-compatible fragment shader glsl code to webgl2.
 *
 * @param fragmentShader - String containing the fragment shader glsl code.
 * @returns the converted glsl code.
 */
function convertFragmentShaderToWebGL2(fragmentShader) {
    return ([
    	"#version 300 es",
        "#define varying in",
        "precision highp float;",
		"precision highp int;",
        "out highp vec4 pc_fragColor;",
        "#define gl_FragColor pc_fragColor",
        "#define gl_FragDepthEXT gl_FragDepth",
        "#define texture2D texture",
        "#define textureCube texture",
        "#define texture2DProj textureProj",
        "#define texture2DLodEXT textureLod",
        "#define texture2DProjLodEXT textureProjLod",
        "#define textureCubeLodEXT textureLod",
        "#define texture2DGradEXT textureGrad",
        "#define texture2DProjGradEXT textureProjGrad",
        "#define textureCubeGradEXT textureGrad"
    ].join("\n") +
        "\n" +
        fragmentShader);
}

export { convertVertexShaderToWebGL2, convertFragmentShaderToWebGL2};