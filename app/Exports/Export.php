<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\Exportable;

class Export implements WithMultipleSheets
{
   use Exportable;

    protected $tipe;

    function __construct($tipe)
    {
        $this->tipe = $tipe;
    }


    public function sheets(): array
    {
        $sheets = [];

        if($this->tipe == 1){
            for ($month = 1; $month <= 12; $month++) {
                $sheets[] = new LaporanPresensiExport2(0, $month, 2023);
            }
        }else{
            $sheets[1] = new PNG(0, 1, 2023);
            $sheets[2] = new Hadir(1);
            $sheets[3] = new KegiatanKantor(1);
            $sheets[4] = new RekapIzin(1);
            $sheets[5] = new Alpa(1);
            $sheets[6] = new RekapSakit(1);
            $sheets[7] = new Off(1);
            $sheets[8] = new Kuliah(1);
            $sheets[9] = new RekapKeterlambatan(1);
            $sheets[10] = new RekapKeluar(1);
            $sheets[11] = new RekapPulangAwal(1);
            $sheets[12] = new Seragam(1);
        }
      

        


        return $sheets;
    }
    

}
