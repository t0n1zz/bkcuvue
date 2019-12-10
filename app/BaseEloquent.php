<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Watson\Rememberable\Rememberable;

class BaseEloquent extends Model
{
    use Rememberable;

    protected $rememberCacheTag;
    protected $rememberFor;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->rememberCacheTag = $this->getTable();

        $this->rememberFor = 17280; // 12 Days
    }

    public function save(array $options = [])
    {
        $this->invalidateCache();
        parent::save($options);
    }

    public function delete()
    {
        $this->invalidateCache();
        parent::delete();
    }

    protected function invalidateCache()
    {
        Cache::tags($this->getTag())->flush();
    }

    protected function getTag()
    {
        return $this->getTable();
    }
}