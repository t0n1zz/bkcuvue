<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'index_artikel']);
        Permission::create(['name' => 'create_artikel']);
        Permission::create(['name' => 'update_artikel']);
        Permission::create(['name' => 'destroy_artikel']);
        Permission::create(['name' => 'terbitkan_artikel']);
        Permission::create(['name' => 'utamakan_artikel']);

        Permission::create(['name' => 'index_user']);
        Permission::create(['name' => 'create_user']);
        Permission::create(['name' => 'update_user']);
        Permission::create(['name' => 'destroy_user']);
        Permission::create(['name' => 'reset_password']);
        Permission::create(['name' => 'status_user']);
        Permission::create(['name' => 'hak_akses_user']);

        Permission::create(['name' => 'index_artikel_penulis']);
        Permission::create(['name' => 'create_artikel_penulis']);
        Permission::create(['name' => 'update_artikel_penulis']);
        Permission::create(['name' => 'destroy_artikel_penulis']);

        Permission::create(['name' => 'index_artikel_kategori']);
        Permission::create(['name' => 'create_artikel_kategori']);
        Permission::create(['name' => 'update_artikel_kategori']);
        Permission::create(['name' => 'destroy_artikel_kategori']);

        Permission::create(['name' => 'index_cu']);
        Permission::create(['name' => 'create_cu']);
        Permission::create(['name' => 'update_cu']);
        Permission::create(['name' => 'destroy_cu']);

        Permission::create(['name' => 'index_tp']);
        Permission::create(['name' => 'create_tp']);
        Permission::create(['name' => 'update_tp']);
        Permission::create(['name' => 'destroy_tp']);

        Permission::create(['name' => 'index_aktivis']);
        Permission::create(['name' => 'create_aktivis']);
        Permission::create(['name' => 'update_aktivis']);
        Permission::create(['name' => 'destroy_aktivis']);

        Permission::create(['name' => 'index_produk_cu']);
        Permission::create(['name' => 'create_produk_cu']);
        Permission::create(['name' => 'update_produk_cu']);
        Permission::create(['name' => 'destroy_produk_cu']);

        Permission::create(['name' => 'index_diklat_bkcu']);
        Permission::create(['name' => 'create_diklat_bkcu']);
        Permission::create(['name' => 'update_diklat_bkcu']);
        Permission::create(['name' => 'destroy_diklat_bkcu']);

        Permission::create(['name' => 'index_tempat']);
        Permission::create(['name' => 'create_tempat']);
        Permission::create(['name' => 'update_tempat']);
        Permission::create(['name' => 'destroy_tempat']);

        Permission::create(['name' => 'index_laporan_cu']);
        Permission::create(['name' => 'create_laporan_cu']);
        Permission::create(['name' => 'update_laporan_cu']);
        Permission::create(['name' => 'destroy_laporan_cu']);
        Permission::create(['name' => 'upload_laporan_cu']);
        Permission::create(['name' => 'diskusi_laporan_cu']);

        Permission::create(['name' => 'index_laporan_tp']);
        Permission::create(['name' => 'create_laporan_tp']);
        Permission::create(['name' => 'update_laporan_tp']);
        Permission::create(['name' => 'destroy_laporan_tp']);
        Permission::create(['name' => 'upload_laporan_tp']);
        Permission::create(['name' => 'diskusi_laporan_tp']);

    }
}
