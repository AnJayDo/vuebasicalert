const { defineComponent, resolveComponent, openBlock, createElementBlock, Fragment, createVNode, createElementVNode, createStaticVNode } = Vue;

var script = defineComponent({
  name: "ServeDev",
  components: {
    VueBasicAlert,
  }
});

const _hoisted_1 = { class: "container" };
const _hoisted_2 = /*#__PURE__*/createElementVNode("h1", { class: "header" }, "Basic Alert Google Style", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createElementVNode("p", { class: "paragraph" }, "These are 4 examples with solid icons", -1 /* HOISTED */);
const _hoisted_4 = { class: "btn-container" };
const _hoisted_5 = /*#__PURE__*/createElementVNode("p", { class: "paragraph" }, "These are 4 examples with regular icons", -1 /* HOISTED */);
const _hoisted_6 = { class: "btn-container" };
const _hoisted_7 = /*#__PURE__*/createElementVNode("p", { class: "paragraph" }, "These are 6 examples with different positions", -1 /* HOISTED */);
const _hoisted_8 = { class: "btn-container" };
const _hoisted_9 = /*#__PURE__*/createStaticVNode("<div class=\"readme\"><h1 id=\"vue-basic-alert\">vue-basic-alert</h1><p>Basic Vue Alert Component for basic use cases.</p><h2 id=\"demo\">Demo</h2><p><img src=\"https://media3.giphy.com/media/esGefiT48Dnx947at6/giphy.gif\" alt=\"Alt Text\"></p><h2 id=\"installation\">Installation</h2><p> Use the node package manager <a href=\"https://www.npmjs.com/package/vue-basic-alert\">npm</a> to install vue-basic-alert. </p><pre><code class=\"lang-bash\">npm <span class=\"hljs-selector-tag\">i</span> --save vue-basic-alert\n    </code></pre><h2 id=\"usage\">Usage</h2><p>Import Vue Basic Alert Component first.</p><pre><code class=\"lang-javascript\"><span class=\"hljs-keyword\">import</span> VueBasicAlert <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-basic-alert&#39;</span>\n\n    <span class=\"hljs-keyword\">export</span> default defineComponent({\n    ...\n    components: {\n        VueBasicAlert\n    }\n    ...\n    });\n    </code></pre><p> Or <code>app.use(VueBasicAlert)</code> . </p><pre><code class=\"lang-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>;\n    <span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;App.vue&#39;</span>;\n    <span class=\"hljs-keyword\">import</span> VueBasicAlert <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-basic-alert&#39;</span>\n\n    <span class=\"hljs-keyword\">const</span> app = createApp(App);\n\n    app.use(VueBasicAlert)\n\n    app.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>);\n    </code></pre><p> Add <code>&lt;vue-basic-alert ref=&quot;alert&quot; /&gt;</code> to your <code>app</code> . To interact with <code>vue-basic-alert</code> , you can use <code>$ref.alert</code> . </p><p> There are 2 methods: <code> showAlert(alertType: string, iconSize: number, iconType: string ,alertHeader: string, alertMessage: string) </code> and <code>closeAlert()</code></p><pre><code class=\"lang-javascript\"><span class=\"hljs-symbol\">&lt;template&gt;</span>\n    &lt;div id=<span class=\"hljs-string\">&quot;app&quot;</span>&gt;\n        &lt;button \n            @click=<span class=\"hljs-comment\">&quot;</span>\n            $refs.alert.showAlert(\n                <span class=\"hljs-string\">&#39;success&#39;</span>, // There are <span class=\"hljs-number\">4</span> types of aler<span class=\"hljs-variable\">t:</span> success, info, warning, error\n                <span class=\"hljs-string\">&#39;This is the information of something you may know Success.&#39;</span>, // Message of the alert\n                <span class=\"hljs-string\">&#39;Success 200&#39;</span>, // Header of the alert\n                { iconSize: <span class=\"hljs-number\">35</span>, // Size of the icon (px)\n                iconType: <span class=\"hljs-string\">&#39;solid&#39;</span>, // Icon style<span class=\"hljs-variable\">s:</span> now <span class=\"hljs-keyword\">only</span> <span class=\"hljs-number\">2</span> styles <span class=\"hljs-string\">&#39;solid&#39;</span> <span class=\"hljs-built_in\">and</span> <span class=\"hljs-string\">&#39;regular&#39;</span>\n                position: <span class=\"hljs-string\">&#39;top right&#39;</span> } // Position of the alert <span class=\"hljs-string\">&#39;top right&#39;</span>, <span class=\"hljs-string\">&#39;top left&#39;</span>, <span class=\"hljs-string\">&#39;bottom left&#39;</span>, <span class=\"hljs-string\">&#39;bottom right&#39;</span>\n            )<span class=\"hljs-comment\">&quot;</span>\n        &gt;\n            Click <span class=\"hljs-keyword\">to</span> Success alert\n        &lt;/button&gt;\n\n        &lt;vue-basic-alert \n        :duration=<span class=\"hljs-string\">&quot;300&quot;</span> // duration of transistions (ms)\n        :closeIn=<span class=\"hljs-string\">&quot;300&quot;</span> // <span class=\"hljs-keyword\">if</span> you dont have this, you can <span class=\"hljs-keyword\">close</span> the alert manually\n        ref=<span class=\"hljs-string\">&quot;alert&quot;</span> /&gt;\n    &lt;/div&gt;\n    &lt;/template&gt;\n    </code></pre><p><code>vue-basic-alert</code> props: </p><ul><li><code>position</code> : position of the alert <code>type: String</code> , default value is <code>top right</code></li><li><code>duration</code> : duration of transistions (ms) </li><li><code>closeIn</code> : Automatically close the alert in <code>closeIn</code> (ms). If you dont have this, you can close the alert manually </li></ul><h2 id=\"contributing\">Contributing</h2><p> Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. </p><p>Please make sure to update tests as appropriate.</p><h2 id=\"project-status\">Project Status</h2><p> Ready for production. We will update more styles in the <code>2.0.0</code> . </p><ul><li><code>1.0.4</code> : 4 types of alert in just 1 style. <code>readme.md</code> , <code>vue-basic-alert</code> is really basic. </li><li><code>1.0.5</code> : Fixed bugs </li><li><code>1.0.6</code> : Update <code>entry.esm.ts</code> for import, Animations, more position </li><li><code>1.0.8</code> : Fixed CSS bugs </li><li><code>1.0.9</code> : New demo page at <code>https://jasonanger.github.io/vuebasicalert/</code> <a href=\"https://jasonanger.github.io/vuebasicalert/\">page</a></li><li><code>1.1.0</code> : Long-Term Support</li><li><code>2.0.0</code> : <code>To-do</code> 2 more styles and customizable icons, etc. </li></ul><h2 id=\"license\">License</h2><p><a href=\"https://choosealicense.com/licenses/mit/\">MIT</a></p><p>Copyright (c) 2022-present, Jason Anger (An Do)</p></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueBasicAlert = resolveComponent("VueBasicAlert");

  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_VueBasicAlert, { ref: "alert" }, null, 512 /* NEED_PATCH */),
    createElementVNode("div", _hoisted_1, [
      _hoisted_2,
      _hoisted_3,
      createElementVNode("div", _hoisted_4, [
        createElementVNode("button", {
          class: "btn text-white success",
          onClick: _cache[0] || (_cache[0] = $event => (
          _ctx.$refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'top right' }
          )
        ))
        }, " Click to Success alert "),
        createElementVNode("button", {
          class: "btn text-white info",
          onClick: _cache[1] || (_cache[1] = $event => (
          _ctx.$refs.alert.showAlert(
            'info',
            'This is the information of something you may know.'
          )
        ))
        }, " Click to Info alert "),
        createElementVNode("button", {
          class: "btn text-white error",
          onClick: _cache[2] || (_cache[2] = $event => (
          _ctx.$refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.'
          )
        ))
        }, " Click to Error alert "),
        createElementVNode("button", {
          class: "btn text-white warning",
          onClick: _cache[3] || (_cache[3] = $event => (
          _ctx.$refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.'
          )
        ))
        }, " Click to Warning alert ")
      ]),
      _hoisted_5,
      createElementVNode("div", _hoisted_6, [
        createElementVNode("button", {
          class: "btn text-white success",
          onClick: _cache[4] || (_cache[4] = $event => (
          _ctx.$refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconType: 'regular' }
          )
        ))
        }, " Click to Success alert "),
        createElementVNode("button", {
          class: "btn text-white info",
          onClick: _cache[5] || (_cache[5] = $event => (
          _ctx.$refs.alert.showAlert(
            'info',
            'This is the information of something you may know.',
            'Info 200',
            { iconType: 'regular' }
          )
        ))
        }, " Click to Info alert "),
        createElementVNode("button", {
          class: "btn text-white error",
          onClick: _cache[6] || (_cache[6] = $event => (
          _ctx.$refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.',
            'Error 500',
            { iconType: 'regular' }
          )
        ))
        }, " Click to Error alert "),
        createElementVNode("button", {
          class: "btn text-white warning",
          onClick: _cache[7] || (_cache[7] = $event => (
          _ctx.$refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.',
            'Warning 400',
            { iconType: 'regular' }
          )
        ))
        }, " Click to Warning alert ")
      ]),
      _hoisted_7,
      createElementVNode("div", _hoisted_8, [
        createElementVNode("button", {
          class: "btn text-white info",
          onClick: _cache[8] || (_cache[8] = $event => (
          _ctx.$refs.alert.showAlert(
            'info',
            'This is the information of something you may know.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'top left' }
          )
        ))
        }, " Top Left "),
        createElementVNode("button", {
          class: "btn text-white warning",
          onClick: _cache[9] || (_cache[9] = $event => (
          _ctx.$refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Success.',
            'Warning 200',
            { iconSize: 35, iconType: 'solid', position: 'top center' }
          )
        ))
        }, " Top Center "),
        createElementVNode("button", {
          class: "btn text-white success",
          onClick: _cache[10] || (_cache[10] = $event => (
          _ctx.$refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'top right' }
          )
        ))
        }, " Top Right "),
        createElementVNode("button", {
          class: "btn text-white error",
          onClick: _cache[11] || (_cache[11] = $event => (
          _ctx.$refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'bottom left' }
          )
        ))
        }, " Bottom Left "),
        createElementVNode("button", {
          class: "btn text-white success",
          onClick: _cache[12] || (_cache[12] = $event => (
          _ctx.$refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'bottom center' }
          )
        ))
        }, " Bottom Center "),
        createElementVNode("button", {
          class: "btn text-white warning",
          onClick: _cache[13] || (_cache[13] = $event => (
          _ctx.$refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'bottom right' }
          )
        ))
        }, " Bottom Right ")
      ]),
      _hoisted_9
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.container {\n  max-width: 960px;\n  display: block;\n  margin: auto;\n}\nh1.header {\n  font-family: Arial, Helvetica, sans-serif;\n  padding-bottom: 10px;\n  color: gray;\n  text-align: center;\n  /* border-bottom: solid 2px #80808061; */\n  font-size: 1.4rem;\n}\np.paragraph {\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  color: gray;\n  font-size: 1.1rem;\n}\n.btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 10px auto;\n}\n.btn {\n  display: block;\n  margin: 3px;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.text-white {\n  color: #fff;\n  font-weight: bold;\n}\n.btn.success {\n  background-color: var(--success-green);\n}\n.btn.success:focus,\n.btn.success:active,\n.btn.success:target,\n.btn.success:visited {\n  box-shadow: 0px 0px 5px 1px var(--success-green);\n}\n.btn.info {\n  background-color: var(--info-blue);\n}\n.btn.info:focus,\n.btn.info:active,\n.btn.info:target,\n.btn.info:visited {\n  box-shadow: 0px 0px 5px 1px var(--info-blue);\n}\n.btn.error {\n  background-color: var(--error-red);\n}\n.btn.error:focus,\n.btn.error:active,\n.btn.error:target,\n.btn.error:visited {\n  box-shadow: 0px 0px 5px 1px var(--error-red);\n}\n.btn.warning {\n  background-color: var(--warning-yellow);\n}\n.btn.warning:focus,\n.btn.warning:active,\n.btn.warning:target,\n.btn.warning:visited {\n  box-shadow: 0px 0px 5px 1px var(--warning-yellow);\n}\n.readme {\n  font-family: Arial;\n  padding: 20px 50px;\n  border-radius: 20px;\n  color: #ffffffff;\n  background-color: #343434;\n  margin: 44px auto;\n}\n@media screen and (max-width: 700px) {\n.readme {\n    font-family: Arial;\n    padding: 15px 10px;\n}\n}\n.readme code.lang-bash {\n  height: 26px;\n  padding-top: 8px;\n  padding-right: 20px;\n  padding-bottom: 0px;\n  width: 100%;\n}\n.readme p img {\n  max-width: 100%;\n  border-radius: 5px;\n}\n.readme code {\n  padding: 5px 10px;\n  margin: 6px 3px -6px 2px;\n  border-radius: 6px;\n  background: #000;\n  display: inline-block;\n  box-shadow: inset 0px 0px 7px 0px green;\n  width: max-content;\n  max-width: calc(100% - 20px);\n  overflow-x: scroll;\n}\n.readme code::-webkit-scrollbar {\n  display: none;\n}\n";
styleInject(css_248z);

script.render = render;
script.__file = "tmp/codepen/vuejs/src/pen.vue";

export { script as default };