package utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadExcel {
	
	XSSFWorkbook workbook;

	public ReadExcel(String path) {
		
		FileInputStream inputStream = null;
		try {
			inputStream = new FileInputStream(new File(path));
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try {
			workbook = new XSSFWorkbook(inputStream);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	public List<HashMap<String, String>> readData(String sheetName) {
		
		List<HashMap<String, String>> sheetData = new ArrayList<HashMap<String,String>>();
		
		
		XSSFSheet sheet = workbook.getSheet(sheetName);
		
		XSSFRow headerRow = sheet.getRow(0);
		int rowNum = sheet.getLastRowNum();
		int cellNum = sheet.getRow(0).getLastCellNum();
		
		for (int i=1;i<=rowNum;i++) {
			XSSFRow row= sheet.getRow(i);
			HashMap<String, String> columnData = new HashMap<String,String>();
			
			for(int j=0;j<cellNum;j++) {
				
				XSSFCell cell = row.getCell(j);
				
				columnData.put(headerRow.getCell(j).getStringCellValue(),cell.getStringCellValue());
				
				
				
			}
			
			sheetData.add(columnData);
			
		}
		
		
		sheetData.get(0).get("")
		
		System.out.println(sheetData);
		
		
		return sheetData;
		
	}
	
	public static void main(String[] args) {
		
		ReadExcel excel = new ReadExcel("C:\\RahulExcel.xlsx");
		excel.readData("Credentials");
		
	}
	

}