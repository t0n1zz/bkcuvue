<?php

namespace App\Exports;

use App\Monitoring as AppMonitoring;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use \Maatwebsite\Excel\Sheet;

class Monitoring implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithTitle
{

    protected $id_cu,$id_tp;

    function __construct($id_cu, $id_tp)
    {
        $this->id_cu = $id_cu;
        $this->id_tp = $id_tp;
    }

    public function startCell(): string
    {
        return 'A3';
    }

    public function registerEvents(): array
    {

        return [
            AfterSheet::class => function (AfterSheet $event) {
                /** @var Sheet $sheet */
                $sheet = $event->sheet;

                $sheet->mergeCells('A1:N1');
                $sheet->setCellValue('A2', "Jlh. Rekomendasi");

                $sheet->setCellValue('B2', "Jlh. Tercapai");

                $sheet->setCellValue('C2', "Jlh. Keputusan");

                $sheet->setCellValue('D2', "Temuan");

                $sheet->setCellValue('E2', "Rekomendasi");

                $sheet->setCellValue('F2', "Pencapaian");

                $sheet->setCellValue('G2', "Kendala");

                $sheet->setCellValue('H2', "Tindak Lanjut");

                $sheet->setCellValue('I2', "TP");

                $sheet->setCellValue('J2', "Jenis");

                $sheet->setCellValue('K2', "Perspektif");

                $sheet->setCellValue('L2', "PIC CU");

                $sheet->setCellValue('M2', "PIC PUSKOPCUINA");

                $sheet->setCellValue('N2', "Tgl. Monitoring");



                $styleArray = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ],

                ];


                $styleArray2 = [
                    'alignment' => [
                        'wrapText' => TRUE,
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
                        'width' => 20
                    ],
                ];

                $styleArray3 = [
                    'alignment' => [
                        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
                    ],
                ];




                $event->sheet->getDelegate()->getStyle('A1:K1')->applyFromArray($styleArray);
                $event->sheet->getDelegate()->getStyle('A1:A1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('A')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('B1:B1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('C1:C1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('C')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('D3:D1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('D')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('E3:E1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('E')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('F1:F1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('F')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('G1:G1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('G')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('H1:H1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('H')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('I1:I1000')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('I')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('J1:J1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('J')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('K1:K1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('K')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('L1:L1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('L')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('M1:M1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('M')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('N1:N1000')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('N')->setAutoSize(true);

                $event->sheet->getDelegate()->getStyle('A1:N1')->applyFromArray(['fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'ffff00']
                ]]);

                $event->sheet->getStyle('A1:N1')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ]);
            },
        ];
    }

    public function headings(): array
    {
        return [];
    }

    public function array(): array
    {
        try {
            //code...
            $model = null;
            if($this->id_tp !='semua'){
                $model = AppMonitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->where('id_tp',$this->id_tp)->get()->toArray();
            }else{
                $model = AppMonitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->get()->toArray();
            }
        
            // dd($model[0]['monitoring_pencapaian']);
            $arrayComplete = [];
            foreach ($model as $monitoring) {

                $count = 0;
                $arrayNew = [];
                $arrayRekom = [];
                $arrayPencapaian =[];
                $arrayKendala = [];
                $arrayTindak = [];

                foreach ($monitoring['monitoring_rekom'] as $rekom) {
                    array_push($arrayRekom, $rekom['rekomendasi']);
                }

                foreach ($monitoring['monitoring_pencapaian'] as $pencapaian) {

                    array_push($arrayPencapaian, $pencapaian['pencapaian']);
                    if(isset($pencapaian['kendala'])){
                        array_push($arrayKendala,$pencapaian['kendala']);
                    }

                    if(isset($pencapaian['tindak'])){
                        array_push($arrayTindak,$pencapaian['tindak']);
                    }

                }
    
                if(isset($monitoring['monitoring_rekom'])){
                    array_push($arrayNew, count($monitoring['monitoring_rekom']));
                }else{
                    array_push($arrayNew, '0');
                }
    
                if(isset($monitoring['monitoring_rekom_ok'])){
                    array_push($arrayNew, count($monitoring['monitoring_rekom_ok']));
                }else{
                    array_push($arrayNew, '0');
                }
    
                if(isset($monitoring['monitoring_pencapaian'])){
                    array_push($arrayNew, count($monitoring['monitoring_pencapaian']));
                }else{
                    array_push($arrayNew, '0');
                }
    
                if(isset($monitoring['name'])){
                    array_push($arrayNew, $monitoring['name']);
                }else{
                    array_push($arrayNew, '0');
                }

                if(isset($arrayRekom)){
                    array_push($arrayNew, implode("\n", $arrayRekom));
                }else{
                    array_push($arrayNew, '-');
                }

                if(isset($arrayPencapaian)){
                    array_push($arrayNew, implode("\n", $arrayPencapaian));
                }else{
                    array_push($arrayNew, '-');
                }

                if(isset($arrayKendala)){
                    array_push($arrayNew, implode("\n", $arrayKendala));
                }else{
                    array_push($arrayNew, '-');
                }

                if(isset($arrayTindak)){
                    array_push($arrayNew, implode("\n", $arrayTindak));
                }else{
                    array_push($arrayNew, '-');
                }
               
                if(isset($monitoring['tp']['name'])){
                    array_push($arrayNew, $monitoring['tp']['name']);
                }else{
                    array_push($arrayNew, '-');
                }
                array_push($arrayNew, $monitoring['jenis']);
                array_push($arrayNew, $monitoring['perspektif']);
                if(isset($monitoring['aktivis_cu']['name'])){
                    array_push($arrayNew, $monitoring['aktivis_cu']['name']);
                }else{
                    array_push($arrayNew, '-');
                }
                array_push($arrayNew, $monitoring['aktivis_bkcu']['name']);
                array_push($arrayNew, Carbon::parse($monitoring['tanggal'])->format('d-m-Y'));
                array_push($arrayComplete, $arrayNew);
    
                $count++;
            }
    
            return $arrayComplete;
        } catch (\Throwable $th) {
            //throw $th;
        }
       
    }


    public function title(): string
    {
        return 'Monitoring';
    }
}
