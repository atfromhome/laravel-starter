<?php

declare(strict_types=1);

namespace App\Navigation;

use BackedEnum;
use Webmozart\Assert\Assert;
use Illuminate\Contracts\Support\Arrayable;

/**
 * @template-implements Arrayable<array-key, string|null>
 */
final class NavigationItem implements Arrayable
{
    private int $sort = 0;

    private ?string $label = null;

    private ?string $href = null;

    private string $icon = 'menu-2';

    private ?string $permission = null;

    /** @var array<NavigationItem>|null */
    private ?array $subs = null;

    private function __construct()
    {
    }

    public static function new(): self
    {
        return new self();
    }

    public function sort(int $sort): self
    {
        $this->sort = $sort;

        return $this;
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function href(string $href): self
    {
        $this->href = $href;

        return $this;
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function permission(string|BackedEnum $permission): self
    {
        $this->permission = $permission instanceof BackedEnum ? (string) $permission->value : $permission;

        return $this;
    }

    /**
     * @param  array<NavigationItem>  $items
     */
    public function subs(array $items): self
    {
        $this->subs = $items;

        return $this;
    }

    public function getLabel(): string
    {
        Assert::notNull($this->label);

        return $this->label;
    }

    public function getHref(): ?string
    {
        return $this->href;
    }

    public function getIcon(): string
    {
        return $this->icon;
    }

    public function getPermission(): ?string
    {
        return $this->permission;
    }

    /**
     * @return NavigationItem[]|null
     */
    public function getSubs(): ?array
    {
        return $this->subs;
    }

    public function getSort(): int
    {
        return $this->sort;
    }

    public function toArray(): array
    {
        return [
            'sort' => $this->getSort(),
            'label' => $this->getLabel(),
            'href' => $this->getHref(),
            'icon' => $this->getIcon(),
            'permission' => $this->getPermission(),
            'subs' => $this->getSubs() ? \array_map(static fn (NavigationItem $item) => $item->toArray(), $this->getSubs()) : null,
        ];
    }
}
