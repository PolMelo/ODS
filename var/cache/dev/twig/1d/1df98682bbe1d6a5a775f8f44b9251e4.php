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

/* @PentatrionVite/Collector/icon.svg */
class __TwigTemplate_022e30ddf2f460e995051a895e1739c6 extends Template
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

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@PentatrionVite/Collector/icon.svg"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@PentatrionVite/Collector/icon.svg"));

        // line 1
        yield "<!-- source: https://tabler.io/icons/icon/brand-vite -->
<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-tabler icon-tabler-brand-vite\" width=\"24\" height=\"24\" viewbox=\"0 0 24 24\" stroke-width=\"1.25\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z\"/><path d=\"M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5\"/></svg>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "@PentatrionVite/Collector/icon.svg";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!-- source: https://tabler.io/icons/icon/brand-vite -->
<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-tabler icon-tabler-brand-vite\" width=\"24\" height=\"24\" viewbox=\"0 0 24 24\" stroke-width=\"1.25\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z\"/><path d=\"M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5\"/></svg>", "@PentatrionVite/Collector/icon.svg", "C:\\Users\\Mati\\Desktop\\odspol\\ODS\\vendor\\pentatrion\\vite-bundle\\src\\Resources\\views\\Collector\\icon.svg");
    }
}
