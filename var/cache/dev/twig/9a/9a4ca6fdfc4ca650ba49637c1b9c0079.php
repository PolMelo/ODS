<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* @PentatrionVite/Collector/vite_collector.html.twig */
class __TwigTemplate_56e7049e25ade5223f95caf2800ed6bf extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'toolbar' => [$this, 'block_toolbar'],
            'menu' => [$this, 'block_menu'],
            'panel' => [$this, 'block_panel'],
        ];
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@PentatrionVite/Collector/vite_collector.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@PentatrionVite/Collector/vite_collector.html.twig"));

        $this->parent = $this->load("@WebProfiler/Profiler/layout.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_toolbar(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "toolbar"));

        // line 4
        yield "    ";
        $context["icon"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 5
            yield "    ";
            yield Twig\Extension\CoreExtension::include($this->env, $context, "@PentatrionVite/Collector/icon.svg");
            yield "
    <span class=\"sf-toolbar-value\">Vite</span>
    ";
            yield from [];
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 8
        yield "    ";
        $context["text"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 9
            yield "    <div class=\"sf-toolbar-info-piece\">
        <b>Vite dev Server</b>
        <span>
        <a href=\"";
            // line 12
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("_profiler_vite");
            yield "\">Config</a>
        </span>
    </div>

    <div class=\"sf-toolbar-info-piece\">
        <b>Rendered scripts</b>
        <span class=\"sf-toolbar-status\">";
            // line 18
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 18, $this->source); })()), "renderedScripts", [], "any", false, false, false, 18)), "html", null, true);
            yield "</span>
    </div>
    <div class=\"sf-toolbar-info-piece\">
        <b>Rendered links</b>
        <span class=\"sf-toolbar-status\">";
            // line 22
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 22, $this->source); })()), "renderedStylesheets", [], "any", false, false, false, 22)), "html", null, true);
            yield "</span>
    </div>
    ";
            yield from [];
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 25
        yield "    ";
        yield Twig\Extension\CoreExtension::include($this->env, $context, "@WebProfiler/Profiler/toolbar_item.html.twig", ["link" => true]);
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 28
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_menu(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        // line 29
        yield "    <span class=\"label\">
    <span class=\"icon\">
    ";
        // line 31
        yield Twig\Extension\CoreExtension::include($this->env, $context, "@PentatrionVite/Collector/icon.svg");
        yield "
    </span>
    <strong>Vite</strong>
    </span>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 37
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_panel(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "panel"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "panel"));

        // line 38
        yield "    <h2>Rendered tags</h2>
    ";
        // line 39
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 39, $this->source); })()), "renderedTags", [], "any", false, false, false, 39));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 40
            yield "        <table>
            <thead>
                <tr>
                    <th class=\"key\" colspan=\"2\">";
            // line 43
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["tag"], "filename", [], "any", false, false, false, 43), "html", null, true);
            yield "</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>tag</td>
                    <td>&lt;";
            // line 49
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["tag"], "tagName", [], "any", false, false, false, 49), "html", null, true);
            yield "&gt;</td>
                </tr>
                <tr>
                    <td>origin</td>
                    <td>";
            // line 53
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["tag"], "origin", [], "any", false, false, false, 53), "html", null, true);
            yield "</td>
                </tr>
                <tr>
                    <td>renderAsTag</td>
                    <td>";
            // line 57
            yield Pentatrion\ViteBundle\Service\Debug::stringify(CoreExtension::getAttribute($this->env, $this->source, $context["tag"], "renderAsTag", [], "any", false, false, false, 57));
            yield "</td>
                </tr>
                <tr>
                    <td>renderAsLinkHeader</td>
                    <td>";
            // line 61
            yield Pentatrion\ViteBundle\Service\Debug::stringify(CoreExtension::getAttribute($this->env, $this->source, $context["tag"], "renderAsLinkHeader", [], "any", false, false, false, 61));
            yield "</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>";
            // line 65
            yield Pentatrion\ViteBundle\Service\Debug::stringify(CoreExtension::getAttribute($this->env, $this->source, $context["tag"], "content", [], "any", false, false, false, 65));
            yield "</td>
                </tr>
                <tr>
                    <th class=\"font-normal\" colspan=\"2\">Attributes</th>
                </tr>
                ";
            // line 70
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["tag"], "validAttributes", [], "any", false, false, false, 70));
            foreach ($context['_seq'] as $context["key"] => $context["value"]) {
                // line 71
                yield "                    <tr>
                        <th>";
                // line 72
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["key"], "html", null, true);
                yield "</th>
                        <td>
                            <pre class=\"sf-dump\">";
                // line 74
                yield Pentatrion\ViteBundle\Service\Debug::stringify($context["value"]);
                yield "</pre>
                        </td>
                    </tr>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['key'], $context['value'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 78
            yield "            </tbody>
        </table>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['tag'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 81
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "@PentatrionVite/Collector/vite_collector.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  267 => 81,  259 => 78,  249 => 74,  244 => 72,  241 => 71,  237 => 70,  229 => 65,  222 => 61,  215 => 57,  208 => 53,  201 => 49,  192 => 43,  187 => 40,  183 => 39,  180 => 38,  167 => 37,  151 => 31,  147 => 29,  134 => 28,  120 => 25,  113 => 22,  106 => 18,  97 => 12,  92 => 9,  89 => 8,  81 => 5,  78 => 4,  65 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends \"@WebProfiler/Profiler/layout.html.twig\" %}

{% block toolbar %}
    {% set icon %}
    {{ include('@PentatrionVite/Collector/icon.svg') }}
    <span class=\"sf-toolbar-value\">Vite</span>
    {% endset %}
    {% set text %}
    <div class=\"sf-toolbar-info-piece\">
        <b>Vite dev Server</b>
        <span>
        <a href=\"{{ path('_profiler_vite') }}\">Config</a>
        </span>
    </div>

    <div class=\"sf-toolbar-info-piece\">
        <b>Rendered scripts</b>
        <span class=\"sf-toolbar-status\">{{ collector.renderedScripts | length }}</span>
    </div>
    <div class=\"sf-toolbar-info-piece\">
        <b>Rendered links</b>
        <span class=\"sf-toolbar-status\">{{ collector.renderedStylesheets | length }}</span>
    </div>
    {% endset %}
    {{ include('@WebProfiler/Profiler/toolbar_item.html.twig', { 'link': true }) }}
{% endblock %}

{% block menu %}
    <span class=\"label\">
    <span class=\"icon\">
    {{ include('@PentatrionVite/Collector/icon.svg') }}
    </span>
    <strong>Vite</strong>
    </span>
{% endblock %}

{% block panel %}
    <h2>Rendered tags</h2>
    {% for tag in collector.renderedTags %}
        <table>
            <thead>
                <tr>
                    <th class=\"key\" colspan=\"2\">{{ tag.filename }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>tag</td>
                    <td>&lt;{{ tag.tagName }}&gt;</td>
                </tr>
                <tr>
                    <td>origin</td>
                    <td>{{ tag.origin }}</td>
                </tr>
                <tr>
                    <td>renderAsTag</td>
                    <td>{{ tag.renderAsTag | symfonyvite_stringify }}</td>
                </tr>
                <tr>
                    <td>renderAsLinkHeader</td>
                    <td>{{ tag.renderAsLinkHeader | symfonyvite_stringify }}</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>{{ tag.content | symfonyvite_stringify }}</td>
                </tr>
                <tr>
                    <th class=\"font-normal\" colspan=\"2\">Attributes</th>
                </tr>
                {% for key, value in tag.validAttributes %}
                    <tr>
                        <th>{{ key }}</th>
                        <td>
                            <pre class=\"sf-dump\">{{ value | symfonyvite_stringify }}</pre>
                        </td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    {% endfor %}

{% endblock %}
", "@PentatrionVite/Collector/vite_collector.html.twig", "C:\\Users\\Mati\\Desktop\\Proyecto-ODS\\vendor\\pentatrion\\vite-bundle\\src\\Resources\\views\\Collector\\vite_collector.html.twig");
    }
}
