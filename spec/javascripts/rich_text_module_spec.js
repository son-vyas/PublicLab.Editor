var editor, module;

describe("RichTextModule", function() {

  beforeAll(function() {

    fixture = loadFixtures('index.html');

    editor = new PL.Editor({
      textarea: $('.ple-textarea')[0]
    });

    module = new PL.RichTextModule( editor, { textarea: editor.options.textarea });

  });


  afterEach(function() {
  });


  it("reports key, value, valid", function() {

    expect(module).not.toBeUndefined();
    expect(module.value()).not.toBe(false);
    expect(module.value()).not.toBeUndefined();
    expect(module.key).toBe('body');

    expect(module.options.name).toBe('body');
    expect(module.options.required).toBe(true);

    expect(module.valid()).toBe(true);
    //_module.height = function() {

  });

  it("sets and reports value regardless of whether it's in markdown or wysiwyg mode", function() {

    module.setMode('markdown');
    module.value('Test text');
    expect(module.value()).toBe('Test text');

    module.setMode('wysiwyg');
    expect($(module.editable).html()).toBe('<p>Test text</p>');
    expect(module.value()).toBe('Test text');

    module.value('Test text 2');
    expect(module.value()).toBe('Test text 2');

    module.setMode('markdown');
    module.value('## Test title');
    expect(module.value()).toBe('## Test title');

    module.setMode('html');
    expect($(module.textarea).val()).toBe('<h2 id="test-title">Test title</h2>');

    module.setMode('markdown');
    expect($(module.textarea).val()).toBe('## Test title');

  });


});
