#############################
# pdf2txt
# 1. 把論文 pdf 檔轉成 txt 
# 2. 擷取 keyword 整理字典
# 3. 只保留 introduction 開始到 reference 前的部分
#############################

library(pdftools)
#library(doMC) # parallel
library(stringr)

# set root path of the journal / conference
root_dir <- "/Users/tangchengyi/Desktop/Topic Modeling/HRI"
# return sub-directories as a list
sub_dirs <- setdiff(list.dirs(root_dir, full.names = T), 
                    c(root_dir, paste0(root_dir, "/.ipynb_checkpoints")))
# record how many papers had been download from the journal/conference
sizeOfPapers <- 0
## J BIT: 1025
list.files(sub_dirs[1], full.names = T)
for (directory in sub_dirs) {
  file_list <- list.files(directory, full.names = T)
  sizeOfPapers <- length(file_list) + sizeOfPapers
  
  
  lapply(file_list,function(file){
    list_output <- pdftools::pdf_text(file)
    text_output <- gsub('(\\s|\r|\n)+',' ',paste(unlist(list_output),collapse=" "))
    print(trimws(regmatches(text_output, 
                            gregexpr("(?<=KEYWORDS).*?(?=ACM)",
                            text_output, perl=TRUE))[[1]][1]))
  })
}



# you can use an url or a path
# pdf_url <- "https://cran.r-project.org/web/packages/pdftools/pdftools.pdf"
pdf_path <- "/Users/tangchengyi/Desktop/Topic Modeling/HRI/2020_HRI/3319502.3374791.pdf"
#pdf_path <- "/Users/tangchengyi/Desktop/Topic Modeling/HRI/2010_HRI/1734454.1734468.pdf"
# `pdf_text` converts it to a list
list_output <- pdftools::pdf_text(pdf_path)

# you get an element by page
length(list_output) # 5 elements for a 5 page pdf

# let's print the 5th
cat(list_output[1])

#list_output <- pdftools::pdf_text(file)
text_output <- gsub('(\\s|\r|\n)+',' ',paste(unlist(list_output),collapse=" "))
text_output <- gsub('(\r|\n)+',' ',paste(unlist(list_output),collapse=" "))
trimws(regmatches(text_output, gregexpr("(?<=KEYWORDS).*?(?=ACM)", text_output, perl=TRUE))[[1]][1])
trimws(regmatches(text_output, gregexpr("(?<=KEYWORDS).*?(?<=\\s·\\s\\w).{50}", text_output, perl=TRUE))[[1]][1])

# urls <- c(pdftools = "https://cran.r-project.org/web/packages/pdftools/pdftools.pdf",
#           Rcpp     = "https://cran.r-project.org/web/packages/Rcpp/Rcpp.pdf",
#           jpeg     = "https://cran.r-project.org/web/packages/jpeg/jpeg.pdf")

# lapply(urls,function(url){
#   list_output <- pdftools::pdf_text(url)
#   text_output <- gsub('(\\s|\r|\n)+',' ',paste(unlist(list_output),collapse=" "))
#   trimws(regmatches(text_output, gregexpr("(?<=Keywords:).*?(?=1. Introduction)", text_output, perl=TRUE))[[1]][1])
# })

