<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
	{
    	// Reset cached roles and permissions
        app()['cache']->forget('spatie.permission.cache');

        // create permissions
        Permission::create(['name' => 'update artikel']);
        Permission::create(['name' => 'delete artikel']);
        Permission::create(['name' => 'create artikel']);
        Permission::create(['name' => 'terbitkan artikel']);
        Permission::create(['name' => 'utamakan artikel']);

        // create roles and assign existing permissions

        $role = Role::create(['name' => 'cu-full']);
        $role->givePermissionTo(['update artikel', 'delete artikel']);
    }
}

