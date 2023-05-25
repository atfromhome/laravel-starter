<?php

declare(strict_types=1);

use PhpCsFixer\Fixer\Import\OrderedImportsFixer;
use Symplify\EasyCodingStandard\Config\ECSConfig;
use PhpCsFixer\Fixer\ClassNotation\FinalClassFixer;
use PhpCsFixer\Fixer\Strict\DeclareStrictTypesFixer;
use PhpCsFixer\Fixer\FunctionNotation\VoidReturnFixer;
use PhpCsFixer\Fixer\PhpUnit\PhpUnitMethodCasingFixer;
use Symplify\EasyCodingStandard\ValueObject\Set\SetList;

return static function (ECSConfig $ecsConfig): void {
    $ecsConfig->paths([
        __DIR__ . '/database',
        __DIR__ . '/routes',
        __DIR__ . '/src',
        __DIR__ . '/tests',
        __DIR__ . '/ecs.php',
    ]);

    $ecsConfig->sets([
        SetList::STRICT,
        SetList::SPACES,
        SetList::ARRAY,
        SetList::DOCBLOCK,
        SetList::NAMESPACES,
        SetList::PSR_12,
        SetList::CLEAN_CODE,
    ]);

    $services = $ecsConfig->services();
    $services->set(FinalClassFixer::class);
    $services->set(VoidReturnFixer::class);
    $services->set(DeclareStrictTypesFixer::class);
    $services->set(OrderedImportsFixer::class)->call('configure', [[
        'sort_algorithm' => 'length',
    ]]);
    $services->set(PhpUnitMethodCasingFixer::class)->call('configure', [[
        'case' => 'snake_case',
    ]]);
};
