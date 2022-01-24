<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    VueBasicAlert,
  }
});
</script>

<template>
  <VueBasicAlert ref="alert" />
  <div class="container">
    <h1 class="header">Basic Alert Google Style</h1>
    <p class="paragraph">These are 4 examples with solid icons</p>
    <div class="btn-container">
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'top right' }
          )
        "
      >
        Click to Success alert
      </button>
      <button
        class="btn text-white info"
        @click="
          $refs.alert.showAlert(
            'info',
            'This is the information of something you may know.'
          )
        "
      >
        Click to Info alert
      </button>
      <button
        class="btn text-white error"
        @click="
          $refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.'
          )
        "
      >
        Click to Error alert
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.'
          )
        "
      >
        Click to Warning alert
      </button>
    </div>
    <p class="paragraph">These are 4 examples with regular icons</p>
    <div class="btn-container">
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconType: 'regular' }
          )
        "
      >
        Click to Success alert
      </button>
      <button
        class="btn text-white info"
        @click="
          $refs.alert.showAlert(
            'info',
            'This is the information of something you may know.',
            'Info 200',
            { iconType: 'regular' }
          )
        "
      >
        Click to Info alert
      </button>
      <button
        class="btn text-white error"
        @click="
          $refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.',
            'Error 500',
            { iconType: 'regular' }
          )
        "
      >
        Click to Error alert
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.',
            'Warning 400',
            { iconType: 'regular' }
          )
        "
      >
        Click to Warning alert
      </button>
    </div>
    <p class="paragraph">These are 6 examples with different positions</p>
    <div class="btn-container">
      <button
        class="btn text-white info"
        @click="
          $refs.alert.showAlert(
            'info',
            'This is the information of something you may know.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'top left' }
          )
        "
      >
        Top Left
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Success.',
            'Warning 200',
            { iconSize: 35, iconType: 'solid', position: 'top center' }
          )
        "
      >
        Top Center
      </button>
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'top right' }
          )
        "
      >
        Top Right
      </button>
      <button
        class="btn text-white error"
        @click="
          $refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'bottom left' }
          )
        "
      >
        Bottom Left
      </button>
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success',
            'This is the information of something you may know Success.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'bottom center' }
          )
        "
      >
        Bottom Center
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.',
            'Success 200',
            { iconSize: 35, iconType: 'solid', position: 'bottom right' }
          )
        "
      >
        Bottom Right
      </button>
    </div>
    <div class="readme">
      <h1 id="vue-basic-alert">vue-basic-alert</h1>
      <p>Basic Vue Alert Component for basic use cases.</p>
      <h2 id="demo">Demo</h2>
      <p>
        <img
          src="https://media3.giphy.com/media/esGefiT48Dnx947at6/giphy.gif"
          alt="Alt Text"
        />
      </p>
      <h2 id="installation">Installation</h2>
      <p>
        Use the node package manager
        <a href="https://www.npmjs.com/package/vue-basic-alert">npm</a>
        to install vue-basic-alert.
      </p>
      <pre><code class="lang-bash">npm <span class="hljs-selector-tag">i</span> --save vue-basic-alert
    </code></pre>
      <h2 id="usage">Usage</h2>
      <p>Import Vue Basic Alert Component first.</p>
      <pre><code class="lang-javascript"><span class="hljs-keyword">import</span> VueBasicAlert <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-basic-alert'</span>

    <span class="hljs-keyword">export</span> default defineComponent({
    ...
    components: {
        VueBasicAlert
    }
    ...
    });
    </code></pre>
      <p>
        Or
        <code>app.use(VueBasicAlert)</code>
        .
      </p>
      <pre><code class="lang-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
    <span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">'App.vue'</span>;
    <span class="hljs-keyword">import</span> VueBasicAlert <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-basic-alert'</span>

    <span class="hljs-keyword">const</span> app = createApp(App);

    app.use(VueBasicAlert)

    app.mount(<span class="hljs-string">'#app'</span>);
    </code></pre>
      <p>
        Add
        <code>&lt;vue-basic-alert ref=&quot;alert&quot; /&gt;</code>
        to your
        <code>app</code>
        . To interact with
        <code>vue-basic-alert</code>
        , you can use
        <code>$ref.alert</code>
        .
      </p>
      <p>
        There are 2 methods:
        <code>
          showAlert(alertType: string, iconSize: number, iconType: string
          ,alertHeader: string, alertMessage: string)
        </code>
        and
        <code>closeAlert()</code>
      </p>
      <pre><code class="lang-javascript"><span class="hljs-symbol">&lt;template&gt;</span>
    &lt;div id=<span class="hljs-string">"app"</span>&gt;
        &lt;button 
            @click=<span class="hljs-comment">"</span>
            $refs.alert.showAlert(
                <span class="hljs-string">'success'</span>, // There are <span class="hljs-number">4</span> types of aler<span class="hljs-variable">t:</span> success, info, warning, error
                <span class="hljs-string">'This is the information of something you may know Success.'</span>, // Message of the alert
                <span class="hljs-string">'Success 200'</span>, // Header of the alert
                { iconSize: <span class="hljs-number">35</span>, // Size of the icon (px)
                iconType: <span class="hljs-string">'solid'</span>, // Icon style<span class="hljs-variable">s:</span> now <span class="hljs-keyword">only</span> <span class="hljs-number">2</span> styles <span class="hljs-string">'solid'</span> <span class="hljs-built_in">and</span> <span class="hljs-string">'regular'</span>
                position: <span class="hljs-string">'top right'</span> } // Position of the alert <span class="hljs-string">'top right'</span>, <span class="hljs-string">'top left'</span>, <span class="hljs-string">'bottom left'</span>, <span class="hljs-string">'bottom right'</span>
            )<span class="hljs-comment">"</span>
        &gt;
            Click <span class="hljs-keyword">to</span> Success alert
        &lt;/button&gt;

        &lt;vue-basic-alert 
        :duration=<span class="hljs-string">"300"</span> // duration of transistions (ms)
        :closeIn=<span class="hljs-string">"300"</span> // <span class="hljs-keyword">if</span> you dont have this, you can <span class="hljs-keyword">close</span> the alert manually
        ref=<span class="hljs-string">"alert"</span> /&gt;
    &lt;/div&gt;
    &lt;/template&gt;
    </code></pre>
      <p>
        <code>vue-basic-alert</code>
        props:
      </p>
      <ul>
        <li>
          <code>position</code>
          : position of the alert
          <code>type: String</code>
          , default value is
          <code>top right</code>
        </li>
        <li>
          <code>duration</code>
          : duration of transistions (ms)
        </li>
        <li>
          <code>closeIn</code>
          : Automatically close the alert in
          <code>closeIn</code>
          (ms). If you dont have this, you can close the alert manually
        </li>
      </ul>
      <h2 id="contributing">Contributing</h2>
      <p>
        Pull requests are welcome. For major changes, please open an issue first
        to discuss what you would like to change.
      </p>
      <p>Please make sure to update tests as appropriate.</p>
      <h2 id="project-status">Project Status</h2>
      <p>
        Ready for production. We will update more styles in the
        <code>2.0.0</code>
        .
      </p>
      <ul>
        <li>
          <code>1.0.4</code>
          : 4 types of alert in just 1 style.
          <code>readme.md</code>
          ,
          <code>vue-basic-alert</code>
          is really basic.
        </li>
        <li>
          <code>1.0.5</code>
          : Fixed bugs
        </li>
        <li>
          <code>1.0.6</code>
          : Update
          <code>entry.esm.ts</code>
          for import, Animations, more position
        </li>
        <li>
          <code>1.0.8</code>
          : Fixed CSS bugs
        </li>
        <li>
          <code>2.0.0</code>
          :
          <code>To-do</code>
          2 more styles and customizable icons, etc.
        </li>
      </ul>
      <h2 id="license">License</h2>
      <p><a href="https://choosealicense.com/licenses/mit/">MIT</a></p>
      <p>Copyright (c) 2022-present, Jason Anger (An Do)</p>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 960px;
  display: block;
  margin: auto;
}
h1.header {
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 10px;
  color: gray;
  text-align: center;
  /* border-bottom: solid 2px #80808061; */
  font-size: 1.4rem;
}
p.paragraph {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
  font-size: 1.1rem;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px auto;
}
.btn {
  display: block;
  margin: 3px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.text-white {
  color: #fff;
  font-weight: bold;
}
.btn.success {
  background-color: var(--success-green);
}
.btn.success:focus,
.btn.success:active,
.btn.success:target,
.btn.success:visited {
  box-shadow: 0px 0px 5px 1px var(--success-green);
}
.btn.info {
  background-color: var(--info-blue);
}
.btn.info:focus,
.btn.info:active,
.btn.info:target,
.btn.info:visited {
  box-shadow: 0px 0px 5px 1px var(--info-blue);
}
.btn.error {
  background-color: var(--error-red);
}
.btn.error:focus,
.btn.error:active,
.btn.error:target,
.btn.error:visited {
  box-shadow: 0px 0px 5px 1px var(--error-red);
}
.btn.warning {
  background-color: var(--warning-yellow);
}
.btn.warning:focus,
.btn.warning:active,
.btn.warning:target,
.btn.warning:visited {
  box-shadow: 0px 0px 5px 1px var(--warning-yellow);
}

.readme {
  font-family: Arial;
  padding: 20px 50px;
  border-radius: 20px;
  color: #ffffffff;
  background-color: #343434;
  margin: 44px auto;
}
@media screen and (max-width: 700px) {
  .readme {
    font-family: Arial;
    padding: 15px 10px;
  }
}
.readme code.lang-bash {
  height: 26px;
  padding-top: 8px;
  padding-right: 20px;
  padding-bottom: 0px;
  width: 100%;
}
.readme p img {
  max-width: 100%;
  border-radius: 5px;
}
.readme code {
  padding: 5px 10px;
  margin: 6px 3px -6px 2px;
  border-radius: 6px;
  background: #000;
  display: inline-block;
  box-shadow: inset 0px 0px 7px 0px green;
  width: max-content;
  max-width: calc(100% - 20px);
  overflow-x: scroll;
}
.readme code::-webkit-scrollbar {
  display: none;
}
</style>
