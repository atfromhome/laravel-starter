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
    private ?string $label = null;

    private ?string $href = null;

    private string $icon = 'list';

    private ?string $permission = null;

    private function __construct() {}

    public static function new(): self
    {
        return new self;
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

    public function getLabel(): string
    {
        Assert::notNull($this->label);

        return $this->label;
    }

    public function getHref(): string
    {
        Assert::notNull($this->href);

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

    public function toArray(): array
    {
        return [
            'label' => $this->getLabel(),
            'href' => $this->getHref(),
            'icon' => $this->getIcon(),
            'permission' => $this->getPermission(),
        ];
    }
}
