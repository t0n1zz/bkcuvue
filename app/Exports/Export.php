<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\Exportable;

class Export implements WithMultipleSheets
{
    use Exportable;

    protected $tipe, $periode;

    function __construct($tipe, $periode)
    {
        $this->tipe = $tipe;
        $this->periode = $periode;
    }


    public function sheets(): array
    {
        $sheets = [];
        if ($this->tipe == 1) {
            for ($month = 1; $month <= 12; $month++) {
                $sheets[] = new LaporanPresensiExport2(0, $month, $this->periode);
            }
        } else {
            $sheets[1] = new PNG(0, 1, $this->periode);
            $sheets[2] = new Hadir($this->periode);
            $sheets[3] = new KegiatanKantor($this->periode);
            $sheets[4] = new RekapIzin($this->periode);
            $sheets[5] = new Alpa($this->periode);
            $sheets[6] = new RekapSakit($this->periode);
            $sheets[7] = new Cuti($this->periode);
            $sheets[8] = new Cuti2($this->periode);
            $sheets[9] = new Off($this->periode);
            $sheets[10] = new Kuliah($this->periode);
            $sheets[11] = new RekapKeterlambatan($this->periode);
            $sheets[12] = new RekapKeluar($this->periode);
            $sheets[13] = new RekapPulangAwal($this->periode);
            $sheets[14] = new Seragam($this->periode);
        }


        return $sheets;
    }
}
