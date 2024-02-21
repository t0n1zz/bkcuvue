<?php

namespace App\Exports;

use App\HariLibur;
use App\Monitoring as AppMonitoring;
use App\PresensiCuti;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
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

                $sheet->mergeCells('A1:K1');
                $sheet->setCellValue('A2', "Jlh. Rekomendasi");

                $sheet->setCellValue('B2', "Jlh. Tercapai");

                $sheet->setCellValue('C2', "Jlh. Keputusan");

                $sheet->setCellValue('D2', "Temuan");

                $sheet->setCellValue('E2', "Rekomendasi");

                $sheet->setCellValue('F2', "TP");

                $sheet->setCellValue('G2', "Jenis");

                $sheet->setCellValue('H2', "Perspektif");

                $sheet->setCellValue('I2', "PIC CU");

                $sheet->setCellValue('J2', "PIC PUSKOPCUINA");

                $sheet->setCellValue('K2', "Tgl. Monitoring");



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
                $event->sheet->getDelegate()->getStyle('A1:A100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('A')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('B1:B100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('B')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('C1:C100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('C')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('D3:D100')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('D')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('E3:E100')->applyFromArray($styleArray2);
                $event->sheet->getDelegate()->getColumnDimension('E')->setWidth(50);
                $event->sheet->getDelegate()->getStyle('F1:F100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('F')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('G1:G100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('G')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('H1:H100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('H')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('I1:I100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('I')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('J1:J100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('J')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('K1:K100')->applyFromArray($styleArray3);
                $event->sheet->getDelegate()->getColumnDimension('K')->setAutoSize(true);
                $event->sheet->getDelegate()->getStyle('A1:K1')->applyFromArray(['fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => 'ffff00']
                ]]);

                $event->sheet->getStyle('A1:K1')->applyFromArray([
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
        // $date = \Carbon\Carbon::parse($this->periode . "-" . '01' . "-01");
        $model = null;
        if($this->id_tp !='semua'){
            $model = AppMonitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->where('id_tp',$this->id_tp)->get()->toArray();
        }else{
            $model = AppMonitoring::with('cu', 'tp', 'aktivis_cu', 'aktivis_bkcu', 'monitoring_rekom', 'monitoring_pencapaian','monitoring_rekom_ok')->where('id_cu', $this->id_cu)->get()->toArray();
        }
    
        $arrayComplete = [];
        foreach ($model as $monitoring) {
            // if (isset($cutiS->groupBy('id_user')[$aktivis->id])) {
            $count = 0;
            $arrayNew = [];
            $arrayRekom = [];
            foreach ($monitoring['monitoring_rekom'] as $rekom) {
                array_push($arrayRekom, $rekom['rekomendasi']);
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
           
            if(isset($monitoring['tp']['name'])){
                array_push($arrayNew, $monitoring['tp']['name']);
            }else{
                array_push($arrayNew, '-');
            }
            array_push($arrayNew, $monitoring['jenis']);
            array_push($arrayNew, $monitoring['perspektif']);
            array_push($arrayNew, $monitoring['aktivis_cu']['name']);
            array_push($arrayNew, $monitoring['aktivis_bkcu']['name']);
            array_push($arrayNew, Carbon::parse($monitoring['tanggal'])->format('d-m-Y'));
            array_push($arrayComplete, $arrayNew);

            $count++;
        }



        //     } else {
        //         $arrayNew = [];
        //         array_push($arrayNew, 0);
        //         array_push($arrayNew, 0);
        //         array_push($arrayComplete, $arrayNew);
        //     }
        // }

        return $arrayComplete;
    }


    public function title(): string
    {
        return 'Monitoring';
    }
}
