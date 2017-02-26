<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
          <a class="navbar-brand" href="#">EasyEditor</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <div class="form-group">
                <input class="form-control" type="text" placeholder="파일 이름을 입력하세요.">
                <input class="form-control" type="number" placeholder="15">
                <select id="lang" name="lang" form="lang_form" class="form-control">
              <option value="c_cpp">C</option>
              <option value="c_cpp">C++</option>
              <option value="csharp">C#</option>
              <option value="css">CSS</option>
              <option value="java">Java</option>
              <option value="kotlin">Kotlin</option>
              <option value="go">Go</option>
              <option value="javascript">JavaScript</option>
              <option value="json">JSON</option>
              <option value="html">HTML</option>
              <option value="makefile">MakeFile</option>
              <option value="markdown">MarkDown</option>
              <option value="mysql">MySQL</option>
              <option value="php">PHP</option>
              <option value="python">Python</option>
              <option value="mysql">MySQL</option>
              <option value="plain_text">Plain Text</option>
          </select>
              </div>
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">로그인</a></li>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {

    }
  }
</script>

<style>
.navbar {
  margin-bottom: 0
}
</style>

