<?php

declare(strict_types=1);

namespace App\Navigation;

use Webmozart\Assert\Assert;
use Illuminate\Contracts\Support\Arrayable;

/**
 * @template-implements Arrayable<array-key, array{label: string, menus: array<array-key, mixed>}>
 */
final class NavigationGroup implements Arrayable
{
    /** @var NavigationItem[] */
    private array $menus = [];

    private ?string $label = null;

    private ?string $icon = null;

    private int $sort = 0;

    private function __construct() {}

    public static function new(): self
    {
        return new self;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    /**
     * @return NavigationItem[]
     */
    public function getMenus(): array
    {
        return $this->menus;
    }

    public function getSort(): int
    {
        return $this->sort;
    }

    public function getGroupKey(): string
    {
        if ($this->getLabel() && $this->getIcon()) {
            return $this->getLabel().'|'.$this->getIcon();
        }

        if ($this->getLabel() && $this->getIcon() === null) {
            return $this->getLabel();
        }

        return '';
    }

    public function icon(?string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function label(?string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * @param  NavigationItem[]  $menus
     * @return $this
     */
    public function menus(array $menus): self
    {
        Assert::allIsInstanceOf($menus, NavigationItem::class);

        $this->menus = $menus;

        return $this;
    }

    public function sort(int $sort): self
    {
        $this->sort = $sort;

        return $this;
    }

    public function toArray(): array
    {
        return [
            'icon' => $this->getIcon(),
            'label' => $this->getLabel(),
            'menus' => \array_map(static fn (Arrayable $item) => $item->toArray(), $this->getMenus()),
        ];
    }
}
