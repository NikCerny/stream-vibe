import {
  defineConfig,
  pluginSsg,
  pluginBundle,
  pluginSprite,
  pluginImage,
} from "minista";
import path from "path";

const clientEntry = path.resolve("src/main.js");

const clientScriptPlugin = {
  name: "stream-vibe-client-script",
  config(_config, { command, isSsrBuild }) {
    if (command !== "build" || isSsrBuild) return;

    return {
      build: {
        rolldownOptions: {
          input: { client: clientEntry },
        },
      },
    };
  },
  generateBundle(_options, bundle) {
    const clientChunk = Object.values(bundle).find(
      (item) =>
        item.type === "chunk" &&
        item.facadeModuleId &&
        path.resolve(item.facadeModuleId) === clientEntry,
    );

    if (!clientChunk) return;

    const scriptTag = `<script type="module" src="/${clientChunk.fileName}"></script>`;
    for (const item of Object.values(bundle)) {
      if (item.type !== "asset" || !item.fileName.endsWith(".html")) continue;

      item.source = String(item.source).replace(
        /<script src="\/src\/main\.js" type="module"><\/script>/,
        scriptTag,
      );
    }
  },
};

export default defineConfig(() => ({
  plugins: [
    pluginSsg({ layout: "/src/global.jsx" }),
    pluginBundle({
      src: ["/src/global.jsx", "/src/pages/**/*.{tsx,jsx,mdx}"],
    }),
    clientScriptPlugin,
    pluginSprite(),
    pluginImage(),
    ,
  ],
  root: "",
  // GitHub Pages serves this project from a subpath; local preview serves from root.
  base: process.env.GITHUB_ACTIONS === "true" ? "/stream-vibe/" : "/",
  public: "public",
  out: "dist",
  assets: {
    outDir: "assets",
    outName: "[name]",
    images: {
      outDir: "assets/images",
      outName: "[name]",
      remoteName: "remote",
      optimize: {
        layout: "constrained",
        breakpoints: [
          320, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840,
        ],
        resolution: [1, 2],
        format: "inherit",
        formatOptions: {},
        quality: undefined,
        aspect: undefined,
        background: undefined,
        fit: "cover",
        position: "centre",
      },
    },
    svgr: {
      svgrOptions: {},
    },
    icons: {
      srcDir: "src/assets/icons",
      outDir: "assets/images",
      outName: "[dirname]",
      svgstoreOptions: {
        cleanSymbols: ["fill", "stroke"],
      },
    },
    fonts: {
      outDir: "assets/fonts",
      outName: "[name]",
    },
    bundle: {
      outName: "bundle",
    },
    partial: {
      usePreact: false,
      useIntersectionObserver: true,
      outName: "hydrate",
      rootAttrSuffix: "partial-hydration",
      rootValuePrefix: "ph",
      rootDOMElement: "div",
      rootStyle: { display: "contents" },
      intersectionObserverOptions: {
        root: null,
        rootMargin: "0px",
        thresholds: [0],
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: path.resolve("src") + "/",
      },
    ],
  },
  css: {
    modules: {
      scopeBehaviour: "local",
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: "",
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use '@/styles/helpers' as *;
        `,
      },
      less: {},
      stylus: {},
    },
  },
  markdown: {
    useRemarkGfm: true,
    useRehypeHighlight: true,
    remarkGfmOptions: {},
    rehypeHighlightOptions: {},
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  },
  search: {
    outDir: "assets",
    outName: "search",
    include: ["**/*"],
    exclude: ["/404"],
    baseUrl: "",
    trimTitle: "",
    targetSelector: "[data-search]",
    hit: {
      minLength: 3,
      number: false,
      english: true,
      hiragana: false,
      katakana: true,
      kanji: true,
    },
  },
  delivery: {
    include: ["**/*"],
    exclude: ["/404"],
    trimTitle: "",
    sortBy: "path",
    archives: [],
  },
  beautify: {
    useHtml: true,
    useAssets: false,
    htmlOptions: {
      indent_size: 2,
      max_preserve_newlines: 0,
      indent_inner_html: true,
      extra_liners: [],
      inline: ["span", "strong", "b", "small", "del", "s", "code", "br", "wbr"],
    },
    cssOptions: {
      indent_size: 2,
      space_around_combinator: true,
    },
    jsOptions: {
      indent_size: 2,
    },
  },
  vite: {},
}));
