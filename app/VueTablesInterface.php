<?php
/**
 *  VueTables server-side component interface
 */
namespace App;

Interface VueTablesInterface {
  public function get($table, Array $fields);
}